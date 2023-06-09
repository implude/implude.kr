/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * based on [@camwiegert/typical](https://github.com/camwiegert/typical)
 */

export async function type(
  node: HTMLElement,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ...args: (string | number | Function | Promise<unknown>)[]
) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg);
        break;
      case 'number':
        await wait(arg);
        break;
      case 'function':
        await arg(node, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function edit(node: HTMLElement, text: string) {
  const overlap = getOverlap(node.textContent!, text);
  await perform(node, [
    ...deleter(node.textContent!, overlap),
    ...writer(text, overlap),
  ]);
}

async function wait(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function perform(node: HTMLElement, edits: string[], speed = 60) {
  for (const op of editor(edits)) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(edits: string[]) {
  for (const edit of edits) {
    yield (node: HTMLElement) =>
      requestAnimationFrame(() => (node.textContent = edit));
  }
}

export function* writer(
  [...text]: string,
  startIndex = 0,
  endIndex = text.length,
) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('');
  }
}

export function* deleter(
  [...text]: string,
  startIndex = 0,
  endIndex = text.length,
) {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join('');
  }
}

export function getOverlap(start: string, [...end]: string) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
