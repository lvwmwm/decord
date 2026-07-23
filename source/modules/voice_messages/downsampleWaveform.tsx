// Module ID: 11363
// Function ID: 88367
// Name: downsampleWaveform
// Dependencies: [44, 2]
// Exports: default

// Module 11363 (downsampleWaveform)
const result = require("set").fileFinishedImporting("modules/voice_messages/downsampleWaveform.tsx");

export default function downsampleWaveform(arg0, arg1) {
  importDefault(44)(arg0.length >= arg1, "Waveform smaller than samples");
  if (arg0.length === arg1) {
    return arg0;
  } else {
    const items = [];
    let num5 = 0;
    while (items.length < arg1) {
      let _Math = Math;
      let rounded = Math.round((items.length + 1) * tmp5);
      let num = 0;
      let num2 = 0;
      if (num5 < rounded) {
        let num3 = 0;
        let num4 = 0;
        num = 0;
        num2 = 0;
        if (num5 < arg0.length) {
          let sum = num3 + arg0[num5];
          let sum1 = num4 + 1;
          num5 = num5 + 1;
          num = sum;
          num2 = sum1;
          while (num5 < rounded) {
            num3 = sum;
            num4 = sum1;
            num = sum;
            num2 = sum1;
            if (num5 >= arg0.length) {
              break;
            }
          }
        }
      }
      items[items.length] = num / num2;
      num5 = rounded;
    }
    return items;
  }
};
