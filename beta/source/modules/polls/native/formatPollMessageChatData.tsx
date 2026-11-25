// Module ID: 14281
// Function ID: 14282
// Name: formatPollMessageChatData
// Dependencies: [12149, 8791, 2]
// Exports: default

// Module 14281 (formatPollMessageChatData)
import MarkupParsers from "MarkupParsers" /* 8791 */;
import formatPollMessageChatDataDefault from "formatPollMessageChatData" /* 12149 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/native/formatPollMessageChatData.tsx");

export default function formatNativePollMessageChatData(arg0, arg1) {
  let answers;
  let obj2;
  let obj3;
  const tmp2 = formatPollMessageChatDataDefault(arg0, undefined, arg1);
  if (null != tmp2) {
    let obj = {
      question: obj2,
      answers: answers.map((pollMedia) => {
          let obj2;
          let obj3;
          const obj = { pollMedia: obj2 };
          const merged = Object.assign(pollMedia);
          obj2 = { text: obj3.parsePollMarkup(pollMedia.pollMedia.text, false) };
          const merged1 = Object.assign(pollMedia.pollMedia);
          obj3 = MarkupParsers;
          return obj;
        })
    };
    let merged = Object.assign(tmp2);
    obj2 = { text: obj3.parsePollMarkup(tmp2.question.text) };
    let merged1 = Object.assign(tmp2.question);
    obj3 = MarkupParsers;
    answers = tmp2.answers;
    return obj;
  }
};
