// Module ID: 9878
// Function ID: 9879
// Dependencies: []
// Exports: isSentryRequestUrl

// Module 9878

export function isSentryRequestUrl(arr, getDsn) {
  const tmp = getDsn && getDsn.getDsn();
  arr = getDsn && getDsn.getOptions().tunnel;
  let tmp2 = tmp && arr.includes(tmp.host);
  if (!tmp2) {
    let flag = false;
    if (arr) {
      let substr = arr;
      if ("/" === arr[arr.length - 1]) {
        substr = arr.slice(0, -1);
      }
      let substr1 = arr;
      if ("/" === arr[arr.length - 1]) {
        substr1 = arr.slice(0, -1);
      }
      flag = substr === substr1;
    }
    tmp2 = flag;
  }
  return tmp2;
}
