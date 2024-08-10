import { baz } from 'libs/baz/src/lib/baz';

export function bar(): string {
  return 'bar' + baz();
}
