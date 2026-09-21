// Module ID: 5028
// Function ID: 5029
// Dependencies: [1319, 5029, 5015]

// Module 5028
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5015 */;
import ToString from "ToString" /* 5029 */;

let closure_2 = callBoundIntrinsic("String.prototype.replace");
const isMatch = /^\s$/.test("\u180E");
let closure_3 = isMatch ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
let closure_4 = isMatch ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

export default function trim() {
  return closure_2(closure_2(ToString(RequireObjectCoercible(this)), closure_3, ""), closure_4, "");
};
