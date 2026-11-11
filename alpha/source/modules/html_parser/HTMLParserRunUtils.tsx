// Module ID: 10309
// Function ID: 10310
// Name: HTMLParserRunUtils
// Dependencies: [2]
// Exports: mergeRun

// Module 10309 (HTMLParserRunUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/html_parser/HTMLParserRunUtils.tsx");

export function mergeRun(items1, substr, bold) {
  if (null != items1[items1.length - 1]) {
    if (items1[items1.length - 1].bold === bold.bold) {
      if (items1[items1.length - 1].italic === bold.italic) {
        if (items1[items1.length - 1].underline === bold.underline) {
          if (items1[items1.length - 1].heading === bold.heading) {
            if (items1[items1.length - 1].link === bold.link) {
              items1[items1.length - 1].text = items1[items1.length - 1].text + substr;
            }
          }
        }
      }
    }
  }
  const push = items1.push;
  const obj = { text: substr };
  const merged = Object.assign(bold);
  push(obj);
}
