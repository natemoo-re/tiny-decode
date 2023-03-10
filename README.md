# `tiny-decode`

Decoding [HTML named character references](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) traditionally requires a large table to store entity names and the code points to which they refer. Unless you take extreme care, this data can easily end up in your JavaScript bundle.

`tiny-decode` takes advantage of [export conditions](https://nodejs.org/api/packages.html#packages_conditional_exports) to include only as much JavaScript as necessary. For bundled browser code, the `decode` function is only a few bytes. For server-side code, `decode` includes the full [`entities`](https://github.com/fb55/entities) module, which is much larger.

## Example

```
Bundle `entities`     18.52 kB │ gzip: 19.64 kB
Bundle `tiny-decode`   0.97 kB │ gzip: 0.56 kB
```
