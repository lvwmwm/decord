// Module ID: 15777
// Function ID: 120617
// Name: getStreamIssueReportOptions
// Dependencies: []
// Exports: default

// Module 15777 (getStreamIssueReportOptions)
const StreamIssueReportReasons = require(dependencyMap[0]).StreamIssueReportReasons;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/go_live/utils/getStreamIssueReportOptions.tsx");

export default function getStreamIssueReportOptions(isEndStream) {
  isEndStream = isEndStream.isEndStream;
  let obj = { id: "black-screen", value: StreamIssueReportReasons.BLACK_SCREEN };
  const intl = require(dependencyMap[1]).intl;
  const string = intl.string;
  const t = require(dependencyMap[1]).t;
  if (isEndStream) {
    let stringResult = string(t.0X5Zbq);
  } else {
    stringResult = string(t.fxiRNr);
  }
  obj.label = stringResult;
  const items = [obj, , , , , , , , ];
  obj = { id: "blurry", value: StreamIssueReportReasons.BLURRY };
  const intl2 = require(dependencyMap[1]).intl;
  const string2 = intl2.string;
  const t2 = require(dependencyMap[1]).t;
  if (isEndStream) {
    let string2Result = string2(t2.VVPQyy);
  } else {
    string2Result = string2(t2.E8jTMN);
  }
  obj.label = string2Result;
  items[1] = obj;
  obj = { id: "lagging", value: StreamIssueReportReasons.LAGGING };
  const intl3 = require(dependencyMap[1]).intl;
  const string3 = intl3.string;
  const t3 = require(dependencyMap[1]).t;
  if (isEndStream) {
    let string3Result = string3(t3.ObEHd4);
  } else {
    string3Result = string3(t3.VoSJEQ);
  }
  obj.label = string3Result;
  items[2] = obj;
  const obj1 = { id: "out-of-sync", value: StreamIssueReportReasons.OUT_OF_SYNC };
  const intl4 = require(dependencyMap[1]).intl;
  const string4 = intl4.string;
  const t4 = require(dependencyMap[1]).t;
  if (isEndStream) {
    let string4Result = string4(t4.mYmwD3);
  } else {
    string4Result = string4(t4.+NluQm);
  }
  obj1.label = string4Result;
  items[3] = obj1;
  const obj2 = { id: "audio-missing", value: StreamIssueReportReasons.AUDIO_MISSING };
  const intl5 = require(dependencyMap[1]).intl;
  const string5 = intl5.string;
  const t5 = require(dependencyMap[1]).t;
  if (isEndStream) {
    let string5Result = string5(t5.Xwv41+);
  } else {
    string5Result = string5(t5.G2egzT);
  }
  obj2.label = string5Result;
  items[4] = obj2;
  const obj3 = { id: "audio-poor", value: StreamIssueReportReasons.AUDIO_POOR };
  const intl6 = require(dependencyMap[1]).intl;
  const string6 = intl6.string;
  const t6 = require(dependencyMap[1]).t;
  if (isEndStream) {
    let string6Result = string6(t6.fHey+d);
  } else {
    string6Result = string6(t6.aHOfIo);
  }
  obj3.label = string6Result;
  items[5] = obj3;
  const obj4 = { id: "stream-stopped", value: StreamIssueReportReasons.STREAM_STOPPED };
  const intl7 = require(dependencyMap[1]).intl;
  obj4.label = intl7.string(require(dependencyMap[1]).t.uEoqQp);
  items[6] = obj4;
  const obj5 = { id: "vibes-off", value: StreamIssueReportReasons.VIBES_OFF };
  const intl8 = require(dependencyMap[1]).intl;
  obj5.label = intl8.string(require(dependencyMap[1]).t.++JLL0);
  items[7] = obj5;
  const obj6 = { id: "other", value: StreamIssueReportReasons.OTHER };
  const intl9 = require(dependencyMap[1]).intl;
  obj6.label = intl9.string(require(dependencyMap[1]).t.emlT91);
  items[8] = obj6;
  return items;
};
