// Module ID: 20295
// Function ID: 20296
// Name: generateCurl
// Dependencies: []
// Exports: generateCurl

// Module 20295 (generateCurl)
function shellEscape(body) {
  let text = body;
  const obj = /^[a-zA-Z0-9._\-/:=@,+]+$/;
  if (!obj.test(body)) {
    text = `${"'" + body.replace(/'/g, "'\\''")}'`;
  }
  return text;
}

export function generateCurl(request1) {
  const method = request1.method && "GET" !== request1.method;
  const items = ["curl"];
  if (method) {
    items.push("-X", shellEscape(request1.method));
  }
  if (request1.headers) {
    const headers = request1.headers;
    const iter = headers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let iter2 = nextResult;
      let str7 = nextResult.key;
      if ("prefetchkey" !== str7.toLowerCase()) {
        let _HermesInternal = HermesInternal;
        let arr8 = items.push("-H", shellEscape("" + iter2.key + ": " + iter2.value));
      }
      continue;
    }
  }
  if (request1.body) {
    let body;
    if (request1.body.length > 10000) {
      const body1 = request1.body;
      body = `${arr2.slice(0, 10000)}...[truncated]`;
    } else {
      body = request1.body;
    }
    items.push("-d", shellEscape(body));
  }
  if (request1.verbose) {
    items.push("-v");
  }
  if (request1.compressed) {
    items.push("--compressed");
  }
  items.push(shellEscape(request1.url));
  return items.join(" ");
}
