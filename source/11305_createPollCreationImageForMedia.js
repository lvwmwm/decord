// Module ID: 11305
// Function ID: 87963
// Name: createPollCreationImageForMedia
// Dependencies: []
// Exports: default

// Module 11305 (createPollCreationImageForMedia)
function createPollCreationImageForMedia(mediaURL, status) {
  const mediaAttachmentState = { status, mediaURL };
  return { mediaAttachmentState, emoji: undefined, stickerId: undefined };
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: closure_7, MIN_NUMBER_OF_ANSWERS_PER_POLL: closure_8, PollDurations: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default function useCreatePollCommonData(id, arg1, arg2, initialQuestion) {
  let tmp15;
  arg1 = id;
  const importDefault = arg1;
  const importAll = arg2;
  const dependencyMap = initialQuestion;
  id = id.id;
  let callback = id;
  const tmp3 = callback2(React.useState(() => {
    let mapped;
    if (null != arg3) {
      const initialAnswers = arg3.initialAnswers;
      if (null != initialAnswers) {
        mapped = initialAnswers.map((arg0) => {
          const merged = Object.assign(callback(closure_3[4]).generateEmptyPollAnswer());
          const merged1 = Object.assign(arg0);
          return {};
        });
      }
    }
    if (null == mapped) {
      const items = [arg0(arg3[4]).generateEmptyPollAnswer(), ];
      const obj = arg0(arg3[4]);
      items[1] = arg0(arg3[4]).generateEmptyPollAnswer();
      mapped = items;
      const obj2 = arg0(arg3[4]);
    }
    return mapped;
  }), 2);
  const first = tmp3[0];
  let callback2 = first;
  const React = tmp3[1];
  initialQuestion = undefined;
  if (null != initialQuestion) {
    initialQuestion = initialQuestion.initialQuestion;
  }
  let str = "";
  if (null != initialQuestion) {
    str = initialQuestion;
  }
  const tmp5 = callback2(React.useState(str), 2);
  const first1 = tmp5[0];
  const tmp6 = tmp5[1];
  const tmp8 = callback2(React.useState(false), 2);
  const first2 = tmp8[0];
  let initialDuration;
  if (null != initialQuestion) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (null == initialDuration) {
    initialDuration = first2.ONE_DAY;
  }
  const tmp12 = callback2(React.useState(initialDuration), 2);
  const first3 = tmp12[0];
  const createPollCreationImageForMedia = first3;
  [tmp15, closure_11] = callback2(React.useState({}), 2);
  const tmp16 = callback2(React.useState(false), 2);
  const tmp17 = tmp16[1];
  const found = first.filter((text) => text(arg3[4]).isAnswerFilled(text));
  let tmp18 = first1.length > 0;
  const found1 = first.filter((text) => text(arg3[4]).isIncompleteAnswer(text));
  if (tmp18) {
    tmp18 = found.length >= tmp6;
  }
  if (tmp18) {
    tmp18 = 0 === found1.length;
  }
  const tmp14 = callback2(React.useState({}), 2);
  const tmp21 = callback2(importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).createPoll), 2);
  const first4 = tmp21[0];
  const loading = tmp23.loading;
  const tmp24 = first.length < first1;
  const tmp25 = first.length > tmp6;
  callback = React.useCallback((arg0) => {
    callback2((arg0) => {
      const merged = Object.assign(arg0);
      delete r0.question;
      return {};
    });
    tmp6(arg0);
  }, []);
  const callback1 = React.useCallback((arg0) => {
    ({ text: closure_0, index: closure_1, localCreationAnswerId: closure_2 } = arg0);
    callback2((arg0) => {
      const merged = Object.assign(arg0);
      const combined = "answer-" + closure_2;
      delete r0[r1];
      return {};
    });
    callback((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj["text"] = closure_0;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  callback2 = React.useCallback((arg0, arg1) => {
    callback((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj["image"] = arg0;
      items[arg1] = obj;
      return items;
    });
  }, []);
  const items = [first];
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
      const obj = arg2(arg3[7]);
      const result = obj.removePollUploadAttachment(arg0, tmp.localCreationAnswerId, arg0(arg3[8]).getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL));
      const obj2 = arg0(arg3[8]);
    }
  }, items);
  const items1 = [first, callback2, callback3];
  const items2 = [first, callback2, callback3];
  const callback4 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = id(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items3 = [id, callback2, callback3];
  const callback5 = React.useCallback((arg0, arg1, arg2) => {
    const objectURL = URL.createObjectURL(arg2);
    callback3(arg0, arg1);
    callback2(first3(objectURL, arg0(arg3[9]).PollMediaUploadAttachmentStatus.PREPARING), arg1);
    const result = arg2(arg3[7]).handlePollMediaAttachmentAdd(arg0, first[arg1].localCreationAnswerId, arg2);
    callback2(first3(objectURL, arg0(arg3[9]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), arg1);
  }, items2);
  const callback6 = React.useCallback((emoji) => {
    callback3(id, arg1);
    callback2({ emoji, stickerId: undefined, mediaAttachmentState: undefined }, arg1);
  }, items3);
  const items4 = [tmp24];
  const callback7 = React.useCallback((arg0) => {
    callback((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_0]);
      obj["image"] = undefined;
      items[arg0] = obj;
      return items;
    });
  }, []);
  const items5 = [first.length, tmp25, id, arg2, callback3];
  const callback8 = React.useCallback(() => {
    if (tmp24) {
      callback((arg0) => {
        const items = [...arg0];
        items[tmp] = callback(closure_3[4]).generateEmptyPollAnswer();
        return items;
      });
    }
  }, items4);
  const items6 = [id];
  const callback9 = React.useCallback((indexToRemove) => {
    if (tmp25) {
      callback3(id, indexToRemove);
      callback((arg0) => {
        const items = [...arg0];
        items.splice(arg0, 1);
        return items;
      });
      if (null != arg2) {
        const obj = { indexToRemove, numberOfAnswers: first.length };
        arg2(obj);
      }
    }
  }, items5);
  const effect = React.useEffect(() => () => {
    const result = callback(closure_3[7]).removeAllPollUploadAttachments(closure_4);
  }, items6);
  const items7 = [first, first1];
  const callback10 = React.useCallback(() => {
    let id = true;
    const obj = {};
    const arg1 = obj;
    if (0 === first1.trim().length) {
      id = false;
      const intl = id(arg3[10]).intl;
      obj.question = intl.string(id(arg3[10]).t.gPX3oI);
    }
    if (first.filter((text) => callback(closure_3[4]).isAnswerFilled(text)).length < tmp6) {
      id = false;
      const _HermesInternal = HermesInternal;
      const combined = "answer-" + first[0].localCreationAnswerId;
      const intl2 = id(arg3[10]).intl;
      obj[combined] = intl2.string(id(arg3[10]).t.fYvzEX);
      const tmp6 = id;
    }
    const item = first.forEach((localCreationAnswerId) => {
      const obj = callback(closure_3[4]);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        const callback = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = callback(closure_3[10]).intl;
        obj[combined] = intl.string(callback(closure_3[10]).t.8Qqkc+);
      }
    });
    callback2(obj);
    tmp17(!id);
    return id;
  }, items7);
  // CreateGeneratorClosureLongIndex (0x67)
  const items8 = [first1, found, first2, first3, first4, id, arg1];
  const callback11 = React.useCallback(callback(tmp), items8);
  const items9 = [callback11, loading, callback10];
  const obj = {
    answers: first,
    question: first1,
    setQuestion: tmp6,
    allowMultiSelect: first2,
    setAllowMultiSelect: tmp8[1],
    duration: first3,
    setDuration: tmp12[1],
    canPost: tmp18,
    canAddMoreAnswers: tmp24,
    canRemoveMoreAnswers: tmp25,
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
    setShouldFocusOnInvalidField: tmp17
  };
  return obj;
};
