// Module ID: 11322
// Function ID: 88061
// Name: createPollCreationImageForMedia
// Dependencies: [5, 57, 31, 7071, 7003, 11323, 9935, 11324, 11325, 11326, 1212, 7906, 2]
// Exports: default

// Module 11322 (createPollCreationImageForMedia)
import useRequest from "useRequest";
import _slicedToArray from "_slicedToArray";
import result from "result";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function createPollCreationImageForMedia(mediaURL, status) {
  const mediaAttachmentState = { status, mediaURL };
  return { mediaAttachmentState, emoji: undefined, stickerId: undefined };
}
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: closure_7, MIN_NUMBER_OF_ANSWERS_PER_POLL: closure_8, PollDurations: closure_9 } = POLL_ATTACHMENT_FOLDER);
let result = require("result").fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default function useCreatePollCommonData(id, arg1, arg2, initialQuestion) {
  let closure_11;
  let tmp15;
  let closure_0 = id;
  const importDefault = arg1;
  let closure_2 = arg2;
  const dependencyMap = initialQuestion;
  id = id.id;
  let tmp3 = first(React.useState(() => {
    let mapped;
    if (null != initialQuestion) {
      const initialAnswers = initialQuestion.initialAnswers;
      if (null != initialAnswers) {
        mapped = initialAnswers.map((arg0) => {
          const merged = Object.assign(callback(table[4]).generateEmptyPollAnswer());
          const merged1 = Object.assign(arg0);
          return {};
        });
      }
    }
    if (null == mapped) {
      const items = [id(initialQuestion[4]).generateEmptyPollAnswer(), ];
      const obj = id(initialQuestion[4]);
      items[1] = id(initialQuestion[4]).generateEmptyPollAnswer();
      mapped = items;
      const obj2 = id(initialQuestion[4]);
    }
    return mapped;
  }), 2);
  first = tmp3[0];
  React = tmp3[1];
  initialQuestion = undefined;
  if (null != initialQuestion) {
    initialQuestion = initialQuestion.initialQuestion;
  }
  let str = "";
  if (null != initialQuestion) {
    str = initialQuestion;
  }
  const tmp5 = first(React.useState(str), 2);
  const first1 = tmp5[0];
  let closure_8 = tmp6;
  const tmp8 = first(React.useState(false), 2);
  const first2 = tmp8[0];
  let initialDuration;
  if (null != initialQuestion) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (null == initialDuration) {
    initialDuration = first2.ONE_DAY;
  }
  const tmp12 = first(React.useState(initialDuration), 2);
  const first3 = tmp12[0];
  [tmp15, closure_11] = first(React.useState({}), 2);
  const tmp16 = first(React.useState(false), 2);
  let closure_12 = tmp17;
  const found = first.filter((text) => id(initialQuestion[4]).isAnswerFilled(text));
  let tmp18 = first1.length > 0;
  const found1 = first.filter((text) => id(initialQuestion[4]).isIncompleteAnswer(text));
  if (tmp18) {
    tmp18 = found.length >= closure_8;
  }
  if (tmp18) {
    tmp18 = 0 === found1.length;
  }
  const tmp14 = first(React.useState({}), 2);
  const tmp21 = first(importDefault(11323)(importDefault(9935).createPoll), 2);
  const first4 = tmp21[0];
  const loading = tmp23.loading;
  let closure_16 = tmp24;
  let closure_17 = tmp25;
  const callback = React.useCallback((arg0) => {
    callback3((arg0) => {
      const merged = Object.assign(arg0);
      delete tmp.question;
      return {};
    });
    tmp6(arg0);
  }, []);
  const callback1 = React.useCallback((arg0) => {
    let closure_0;
    let closure_1;
    let closure_2;
    ({ text: closure_0, index: closure_1, localCreationAnswerId: closure_2 } = arg0);
    callback3((arg0) => {
      const merged = Object.assign(arg0);
      const combined = "answer-" + closure_2;
      delete tmp[tmp2];
      return {};
    });
    callback2((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj["text"] = closure_0;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  const callback2 = React.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback2((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj["image"] = closure_0;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  let items = [first];
  const callback3 = React.useCallback((arg0, arg1, arg2) => {
    const image = tmp.image;
    let mediaAttachmentState;
    if (null != image) {
      mediaAttachmentState = image.mediaAttachmentState;
    }
    let tmp3 = null != mediaAttachmentState;
    if (tmp3) {
      tmp3 = mediaAttachmentState.mediaURL !== arg2;
    }
    if (tmp3) {
      const obj = callback(initialQuestion[7]);
      const result = obj.removePollUploadAttachment(arg0, tmp.localCreationAnswerId, id(initialQuestion[8]).getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL));
      const obj2 = id(initialQuestion[8]);
    }
  }, items);
  const items1 = [first, callback2, callback3];
  const items2 = [first, callback2, callback3];
  const callback4 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = id(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items3 = [id, callback2, callback3];
  const callback5 = React.useCallback((arg0, arg1, arg2) => {
    const objectURL = URL.createObjectURL(arg2);
    callback3(arg0, arg1);
    callback2(first3(objectURL, id(initialQuestion[9]).PollMediaUploadAttachmentStatus.PREPARING), arg1);
    const result = callback(initialQuestion[7]).handlePollMediaAttachmentAdd(arg0, first[arg1].localCreationAnswerId, arg2);
    callback2(first3(objectURL, id(initialQuestion[9]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), arg1);
  }, items2);
  const callback6 = React.useCallback((emoji) => {
    callback3(id, arg1);
    callback2({ emoji, stickerId: undefined, mediaAttachmentState: undefined }, arg1);
  }, items3);
  const items4 = [first.length < first1];
  const callback7 = React.useCallback((arg0) => {
    let closure_0 = arg0;
    callback2((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_0]);
      obj["image"] = undefined;
      items[closure_0] = obj;
      return items;
    });
  }, []);
  const items5 = [first.length, first.length > closure_8, id, arg2, callback3];
  const callback8 = React.useCallback(() => {
    if (closure_16) {
      callback2((arg0) => {
        const items = [...arg0];
        items[tmp] = callback(table[4]).generateEmptyPollAnswer();
        return items;
      });
    }
  }, items4);
  const items6 = [id];
  const callback9 = React.useCallback((indexToRemove) => {
    let closure_0 = indexToRemove;
    if (closure_17) {
      callback3(id, indexToRemove);
      callback2((arg0) => {
        const items = [...arg0];
        items.splice(closure_0, 1);
        return items;
      });
      if (null != callback) {
        const obj = { indexToRemove, numberOfAnswers: first.length };
        callback(obj);
      }
    }
  }, items5);
  const effect = React.useEffect(() => () => {
    const result = callback(table[7]).removeAllPollUploadAttachments(outer1_4);
  }, items6);
  const items7 = [first, first1];
  const callback10 = React.useCallback(() => {
    let c0 = true;
    let obj = {};
    if (0 === first1.trim().length) {
      c0 = false;
      let intl = id(initialQuestion[10]).intl;
      obj.question = intl.string(id(initialQuestion[10]).t.gPX3oI);
    }
    if (first.filter((text) => callback(7003).isAnswerFilled(text)).length < closure_8) {
      c0 = false;
      let _HermesInternal = HermesInternal;
      let combined = "answer-" + first[0].localCreationAnswerId;
      const intl2 = id(initialQuestion[10]).intl;
      obj[combined] = intl2.string(id(initialQuestion[10]).t.fYvzEX);
    }
    const item = first.forEach((localCreationAnswerId) => {
      const obj = callback(7003);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        let c0 = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = callback(1212).intl;
        obj[combined] = intl.string(callback(1212).t["8Qqkc+"]);
      }
    });
    callback3(obj);
    tmp17(!c0);
    return c0;
  }, items7);
  // CreateGeneratorClosureLongIndex (0x67)
  const items8 = [first1, found, first2, first3, first4, id, arg1];
  const callback11 = React.useCallback(id(tmp), items8);
  const items9 = [callback11, loading, callback10];
  let obj = {
    answers: first,
    question: first1,
    setQuestion: tmp5[1],
    allowMultiSelect: first2,
    setAllowMultiSelect: tmp8[1],
    duration: first3,
    setDuration: tmp12[1],
    canPost: tmp18,
    canAddMoreAnswers: first.length < first1,
    canRemoveMoreAnswers: first.length > closure_8,
    handleQuestionChange: callback,
    handleAnswerTextChange: callback1,
    handleGifSelect: callback4,
    handleEmojiSelect: callback6,
    handleCustomUpload: callback5,
    handleAddAnswer: callback8,
    handleRemoveAnswer: callback9,
    handleRemoveAnswerImage: callback7,
    fieldErrors: tmp15,
    createPoll: callback11,
    handleSubmitPoll: React.useCallback(() => {
      let tmp = !loading;
      if (tmp) {
        tmp = callback10();
      }
      if (tmp) {
        callback11();
      }
    }, items9),
    submitting: loading,
    createPollError: tmp21[1].error,
    shouldFocusOnInvalidField: tmp16[0],
    setShouldFocusOnInvalidField: tmp16[1]
  };
  return obj;
};
