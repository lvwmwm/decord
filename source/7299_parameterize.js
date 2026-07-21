// Module ID: 7299
// Function ID: 58900
// Name: parameterize
// Dependencies: []

// Module 7299 (parameterize)
arg5.parameterize = function parameterize(join) {
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
};
