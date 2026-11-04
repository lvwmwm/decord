// Module ID: 13073
// Function ID: 13074
// Name: SyntaxError
// Dependencies: [13058]

// Module 13073 (SyntaxError)
import createCustomError from "createCustomError" /* 13058 */;


export default function SyntaxError(rawMessage, input, offset) {
  const tmp = createCustomError("SyntaxError", rawMessage);
  tmp.input = input;
  tmp.offset = offset;
  tmp.rawMessage = rawMessage;
  let length = tmp.offset;
  const text = `${tmp.rawMessage}
    ${tmp.input}`;
  const _Array = Array;
  if (!length) {
    length = tmp.input.length;
  }
  const _Array1 = new _Array(length + 1);
  tmp.message = `${`${tmp2}
  --`}${obj.join("-")}^`;
  return tmp;
};
