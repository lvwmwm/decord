// Module ID: 9800
// Function ID: 9801
// Dependencies: []
// Exports: parameterize

// Module 9800

export function parameterize(join) {
  const substr = [...arguments].slice();
  const items = [join, ...substr];
  const string = new String(String.raw.apply(items));
  const str = join.join("\0");
  const str2 = str.replace(/%/g, "%%");
  string.__sentry_template_string__ = str2.replace(/\0/g, "%s");
  string.__sentry_template_values__ = substr;
  return string;
}
