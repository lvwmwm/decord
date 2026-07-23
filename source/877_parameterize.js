// Module ID: 877
// Function ID: 9751
// Name: parameterize
// Dependencies: []

// Module 877 (parameterize)
function parameterize(join) {
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  const items = [join];
  const string = new String(raw.apply(String, items.concat(array)));
  const str = join.join("\0");
  string.__sentry_template_string__ = join.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
  string.__sentry_template_values__ = array;
  return string;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.fmt = parameterize;
arg5.parameterize = parameterize;
