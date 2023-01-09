import { decodeHTML5 } from 'entities'
const ENTITY_RE = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});?/gi;

export function decode(value) {
  ENTITY_RE.lastIndex = 0;
  return value.replace(ENTITY_RE, (m) => decodeHTML5(m));
}
