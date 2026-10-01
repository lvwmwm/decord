// Module ID: 11684
// Function ID: 11685
// Name: useCreatePollFormData
// Dependencies: [5, 32, 19, 7248, 7180, 11685, 11214, 11686, 11687, 11688, 1115, 11220, 2]
// Exports: default

// Module 11684 (useCreatePollFormData)
import intl3 from "intl" /* 1115 */;
import PollsUtils from "PollsUtils" /* 7180 */;
import PollsActionCreatorsDefault from "PollsActionCreators" /* 11214 */;
import useRequestDefault from "useRequest" /* 11685 */;
import PollUploadAttachmentActionCreatorsAll from "PollUploadAttachmentActionCreators" /* 11686 */;
import PollAttachmentUtils from "PollAttachmentUtils" /* 11687 */;
import PollTypes from "PollTypes" /* 11688 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PollsConstants from "PollsConstants" /* 7248 */;
import size from "module_2" /* 2 */;

let c1, c5, c6, channel, closure_1, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
function createPollCreationImageForMedia(mediaURL, status) {
  const obj = { mediaAttachmentState: obj2, emoji: "Array", stickerId: "paddingHorizontal" };
  return obj;
}
let react = react_mod;
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: metroImportDefault, MIN_NUMBER_OF_ANSWERS_PER_POLL: metroImportAll, PollDurations: c9 } = PollsConstants);
let result = size.fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default function useCreatePollCommonData(id, arg1, arg2, initialQuestion) {
  let answers;
  let closure_6;
  let tmp17;
  importDefault = arg1;
  let closure_2 = arg2;
  dependencyMap = initialQuestion;
  id = id.id;
  let obj = react;
  let tmp = answers;
  let tmp2 = answers(react.useState(() => {
    let mapped;
    if (initialQuestion != null) {
      const initialAnswers = initialQuestion.initialAnswers;
      if (initialAnswers != null) {
        mapped = initialAnswers.map((item) => {
          const obj = {};
          const obj2 = id(initialQuestion[4]);
          const merged = Object.assign(obj2.generateEmptyPollAnswer());
          const merged1 = Object.assign(item);
          return obj;
        });
      }
    }
    if (mapped == null) {
      let obj = PollsUtils;
      const items = [obj.generateEmptyPollAnswer(), ];
      let obj2 = PollsUtils;
      items[1] = obj2.generateEmptyPollAnswer();
      mapped = items;
    }
    return mapped;
  }), 2);
  answers = tmp2[0];
  react = tmp2[1];
  let str;
  const useState = react.useState;
  if (initialQuestion != null) {
    str = initialQuestion.initialQuestion;
  }
  if (str == null) {
    str = "";
  }
  const tmpResult = tmp(useState(str), 2);
  const first1 = tmpResult[0];
  const tmp4 = tmpResult[1];
  let closure_8 = tmp4;
  const tmpResult7 = tmp(obj.useState(false), 2);
  const first2 = tmpResult7[0];
  let initialDuration;
  const useState2 = obj.useState;
  const tmp7 = tmpResult7[1];
  if (initialQuestion != null) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (initialDuration == null) {
    initialDuration = first2.ONE_DAY;
  }
  const tmpResult8 = tmp(useState2(initialDuration), 2);
  const first3 = tmpResult8[0];
  const tmp12 = tmpResult8[1];
  const tmpResult9 = tmp(obj.useState(), 2);
  const first4 = tmpResult9[0];
  const tmp15 = tmpResult9[1];
  [tmp17, closure_12] = tmp(obj.useState({}), 2);
  tmp(obj.useState({}), 2);
  const tmpResult11 = tmp(obj.useState(false), 2);
  let closure_13 = tmp20;
  const first5 = tmpResult11[0];
  const found = answers.filter((item) => {
    const obj = id(initialQuestion[4]);
    return obj.isAnswerFilled(item);
  });
  let tmp21 = first1.length > 0;
  const found1 = answers.filter((item) => {
    const obj = id(initialQuestion[4]);
    return obj.isIncompleteAnswer(item);
  });
  if (tmp21) {
    tmp21 = found.length >= closure_8;
  }
  if (tmp21) {
    tmp21 = 0 === found1.length;
  }
  const tmp23 = useRequestDefault;
  const tmpResult12 = tmp(tmp23(PollsActionCreatorsDefault.createPoll), 2);
  const first6 = tmpResult12[0];
  const loading = tmp26.loading;
  let closure_17 = tmp27;
  let closure_18 = tmp28;
  const error = tmp26.error;
  const callback = obj.useCallback((arg0) => {
    closure_12((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      delete obj["question"];
      return obj;
    });
    closure_8(arg0);
  }, []);
  const callback1 = obj.useCallback((arg0) => {
    let closure_129_0;
    let closure_129_1;
    let closure_129_2;
    ({ text: closure_129_0, index: closure_129_1, localCreationAnswerId: closure_129_2 } = arg0);
    closure_12((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      delete obj["answer-" + closure_1_2];
      return obj;
    });
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = { text };
      const merged = Object.assign(items[closure_1_1]);
      items[closure_1_1] = obj;
      return items;
    });
  }, []);
  const callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    closure_1 = arg1;
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = { image };
      const merged = Object.assign(items[closure_1]);
      items[closure_1] = obj;
      return items;
    });
  }, []);
  let items = [answers];
  const callback3 = obj.useCallback((arg0, arg1, arg2) => {
    const image = tmp.image;
    let mediaAttachmentState;
    if (image != null) {
      mediaAttachmentState = image.mediaAttachmentState;
    }
    const tmp3 = null != mediaAttachmentState && mediaAttachmentState.mediaURL !== arg2;
    if (tmp3) {
      const removePollUploadAttachment = PollUploadAttachmentActionCreatorsAll.removePollUploadAttachment;
      const localCreationAnswerId = tmp.localCreationAnswerId;
      PollUploadAttachmentActionCreatorsAll;
      const obj = PollAttachmentUtils;
      const result = removePollUploadAttachment(arg0, localCreationAnswerId, obj.getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL));
    }
  }, items);
  id = undefined;
  const useCallback = obj.useCallback;
  id = id(function*(arg0, value, arg2) {
    let obj5;
    closure_0 = arg0;
    closure_1 = value;
    closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp2;
            closure_0 = closure_1;
            closure_1 = closure_2;
            const localCreationAnswerId = c5[closure_1].localCreationAnswerId;
            callback3(closure_0, closure_1);
            callback2(first3(closure_2, closure_0(initialQuestion[9]).PollMediaUploadAttachmentStatus.PREPARING), closure_1);
            c5 = 1;
            c6 = 1;
            const obj4 = { value: obj5.handlePollGifAttachmentAdd(closure_0, localCreationAnswerId, closure_2), done: false };
            obj5 = closure_2_2(initialQuestion[7]);
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (null != value) {
            callback2(first3(closure_1, closure_0(initialQuestion[9]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), closure_0);
          } else {
            callback2(first3(closure_1, closure_0(initialQuestion[9]).PollMediaUploadAttachmentStatus.ERROR), closure_0);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp24) {
        c6 = 3;
        throw tmp24;
      }
    }
  });
  const items1 = [answers, callback2, callback3];
  const items2 = [answers, callback2, callback3];
  const callback4 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items3 = [id, callback2, callback3];
  const callback5 = obj.useCallback((arg0, arg1, arg2) => {
    const localCreationAnswerId = first[arg1].localCreationAnswerId;
    const objectURL = URL.createObjectURL(arg2);
    callback3(arg0, arg1);
    const obj = { mediaAttachmentState: { status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL }, emoji: "Array", stickerId: "paddingHorizontal" };
    ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
    callback2(obj, arg1);
    const obj3 = PollUploadAttachmentActionCreatorsAll;
    const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
    const obj4 = { mediaAttachmentState: { status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL }, emoji: "Array", stickerId: "paddingHorizontal" };
    ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
    callback2(obj4, arg1);
  }, items2);
  const callback6 = obj.useCallback((emoji, arg1) => {
    callback3(id, arg1);
    const obj = { emoji, stickerId: "Array", mediaAttachmentState: "paddingHorizontal" };
    callback2(obj, arg1);
  }, items3);
  const items4 = [tmp27];
  const callback7 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = { image: undefined };
      const merged = Object.assign(items[closure_0]);
      items[closure_0] = obj;
      return items;
    });
  }, []);
  const items5 = [answers.length, tmp28, id, arg2, callback3];
  const callback8 = obj.useCallback(() => {
    const tmp = closure_17;
    if (tmp) {
      closure_6((arg0) => {
        const items = [...arg0];
        const obj = id(initialQuestion[4]);
        items[tmp] = obj.generateEmptyPollAnswer();
        return items;
      });
    }
  }, items4);
  const items6 = [id];
  const callback9 = obj.useCallback((indexToRemove) => {
    let closure_0 = indexToRemove;
    const tmp = closure_18;
    if (tmp) {
      const length = first.length;
      callback3(id, indexToRemove);
      closure_6((arg0) => {
        const items = [...arg0];
        items.splice(closure_0, 1);
        return items;
      });
      if (closure_2 != null) {
        const obj = { indexToRemove, numberOfAnswers: length };
        tmp8(obj);
      }
    }
  }, items5);
  const effect = obj.useEffect(() => () => {
    const obj = closure_2(initialQuestion[7]);
    const result = obj.removeAllPollUploadAttachments(id);
  }, items6);
  const items7 = [answers, first1];
  const callback10 = obj.useCallback(() => {
    let c0 = true;
    let obj = {};
    if (0 === first1.trim().length) {
      c0 = false;
      const tmp = require;
      const tmp2 = dependencyMap;
      let intl = intl3.intl;
      obj.question = intl.string(intl3.t.gPX3oI);
    }
    if (first.filter((item) => {
      const obj = id(initialQuestion[4]);
      return obj.isAnswerFilled(item);
    }).length < metroImportAll) {
      c0 = false;
      let _HermesInternal = HermesInternal;
      let combined = "answer-" + arr[0].localCreationAnswerId;
      const intl2 = intl3.intl;
      obj[combined] = intl2.string(intl3.t.fYvzEX);
    }
    const item = arr.forEach((localCreationAnswerId) => {
      obj = id(initialQuestion[4]);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        c0 = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = tmp(tmp2[10]).intl;
        obj[combined] = intl.string(id(initialQuestion[10]).t["8Qqkc+"]);
      }
    });
    closure_12(obj);
    closure_13(!c0);
    return c0;
  }, items7);
  const items8 = [first1, found, first2, first3, first4, first6, id, arg1];
  const callback11 = obj.useCallback(id(function*(arg0, value) {
    if (channel === 2) {
      channel = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        channel = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            channel = 3;
            throw value;
          } else if (arg0 === 2) {
            channel = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { channel, question: first1, answers: found, allowMultiSelect: first2, duration: first3, layout: channel(initialQuestion[11]).PollLayoutTypes.DEFAULT, onClose, scheduledTimestamp: first4 };
            c1 = 1;
            channel = 1;
            const obj5 = { value: first6(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          channel = 3;
          throw value;
        } else if (arg0 === 2) {
          channel = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          channel = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp4) {
        channel = 3;
        throw tmp4;
      }
    }
  }), items8);
  const items9 = [callback11, loading, callback10];
  let obj2 = {
    answers,
    question: first1,
    setQuestion: tmp4,
    allowMultiSelect: first2,
    setAllowMultiSelect: tmp7,
    duration: first3,
    setDuration: tmp12,
    scheduledTimestamp: first4,
    setScheduledTimestamp: tmp15,
    canPost: tmp21,
    canAddMoreAnswers: tmp27,
    canRemoveMoreAnswers: tmp28,
    handleQuestionChange: callback,
    handleAnswerTextChange: callback1,
    handleGifSelect: callback4,
    handleEmojiSelect: callback6,
    handleCustomUpload: callback5,
    handleAddAnswer: callback8,
    handleRemoveAnswer: callback9,
    handleRemoveAnswerImage: callback7,
    fieldErrors: tmp17,
    createPoll: callback11,
    handleSubmitPoll: obj.useCallback(() => {
      const tmp = !loading && callback10();
      if (tmp) {
        callback11();
      }
    }, items9),
    submitting: loading,
    createPollError: error,
    shouldFocusOnInvalidField: first5,
    setShouldFocusOnInvalidField: tmp20
  };
  return obj2;
};
