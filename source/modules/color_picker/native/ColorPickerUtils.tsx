// Module ID: 13449
// Function ID: 102137
// Name: normalizeValue
// Dependencies: []

// Module 13449 (normalizeValue)
let closure_0 = { code: "function normalizeValue_ColorPickerUtilsTsx1(value){if(value<0)return 0;if(value>1)return 1;return value;}" };
let closure_1 = { code: "function hsvToRgbWorklet_ColorPickerUtilsTsx2({h:h,s:s,v:v}){let r=0;let g=0;let b=0;h/=360;var i=Math.floor(h*6);var f=h*6-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)];}" };
let closure_2 = { code: "function hslToRgbWorklet_ColorPickerUtilsTsx3({h:h,s:s,l:l}){let r=0;let g=0;let b=0;const c=(1-Math.abs(2*l-1))*s;const x=c*(1-Math.abs(h/60%2-1));const m=l-c/2;if(h===360||0<=h&&h<60){r=c;g=x;b=0;}else if(60<=h&&h<120){r=x;g=c;b=0;}else if(120<=h&&h<180){r=0;g=c;b=x;}else if(180<=h&&h<240){r=0;g=x;b=c;}else if(240<=h&&h<300){r=x;g=0;b=c;}else if(300<=h&&h<360){r=c;g=0;b=x;}return[Math.round((r+m)*255),Math.round((g+m)*255),Math.round((b+m)*255)];}" };
const tmp2 = () => {
  function normalizeValue(arg0) {
    let num = 0;
    if (arg0 >= 0) {
      let num2 = 1;
      if (arg0 <= 1) {
        num2 = arg0;
      }
      num = num2;
    }
    return num;
  }
  normalizeValue.__closure = {};
  normalizeValue.__workletHash = 4078966449794;
  normalizeValue.__initData = closure_0;
  return normalizeValue;
}();
const tmp3 = () => {
  function hsvToRgbWorklet(h) {
    let s;
    let v;
    ({ s, v } = h);
    const result = 6 * (h.h / 360);
    const rounded = Math.floor(result);
    const diff = result - rounded;
    const result1 = v * (1 - s);
    const result2 = v * (1 - diff * s);
    const result3 = v * (1 - (1 - diff) * s);
    const result4 = rounded % 6;
    if (0 === result4) {
      let num5 = v;
      let num6 = result3;
      let num7 = result1;
    } else if (1 === result4) {
      num5 = result2;
      num6 = v;
      num7 = result1;
    } else if (2 === result4) {
      num5 = result1;
      num6 = v;
      num7 = result3;
    } else if (3 === result4) {
      num5 = result1;
      num6 = result2;
      num7 = v;
    } else if (4 === result4) {
      num5 = result3;
      num6 = result1;
      num7 = v;
    } else {
      num5 = 0;
      num6 = 0;
      num7 = 0;
      if (5 === result4) {
        num5 = v;
        num6 = result1;
        num7 = result2;
      }
    }
    const items = [Math.round(255 * num5), Math.round(255 * num6), Math.round(255 * num7)];
    return items;
  }
  hsvToRgbWorklet.__closure = {};
  hsvToRgbWorklet.__workletHash = 14555937576302;
  hsvToRgbWorklet.__initData = closure_1;
  return hsvToRgbWorklet;
}();
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/color_picker/native/ColorPickerUtils.tsx");

export const normalizeValue = tmp2;
export const hsvToRgbWorklet = tmp3;
export const hslToRgbWorklet = () => {
  function hslToRgbWorklet(s) {
    let h;
    let l;
    ({ h, l } = s);
    const result = (1 - Math.abs(2 * l - 1)) * s.s;
    const result1 = result * (1 - Math.abs(h / 60 % 2 - 1));
    const diff = l - result / 2;
    let num = result;
    let num2 = result1;
    let num3 = 0;
    if (360 !== h) {
      if (0 > h) {
        if (60 > h) {
          if (120 > h) {
            if (180 > h) {
              if (240 > h) {
                num = 0;
                num2 = 0;
                num3 = 0;
                if (tmp4) {
                  num = result;
                  num2 = 0;
                  num3 = result1;
                }
                const tmp4 = 300 <= h && h < 360;
              } else {
                num = result1;
                num2 = 0;
                num3 = result;
              }
            } else {
              num = 0;
              num2 = result1;
              num3 = result;
            }
          } else {
            num = 0;
            num2 = result;
            num3 = result1;
          }
        } else {
          num = result1;
          num2 = result;
          num3 = 0;
        }
      } else {
        num = result;
        num2 = result1;
        num3 = 0;
      }
    }
    const items = [Math.round(255 * (num + diff)), Math.round(255 * (num2 + diff)), Math.round(255 * (num3 + diff))];
    return items;
  }
  hslToRgbWorklet.__closure = {};
  hslToRgbWorklet.__workletHash = 13811670810842;
  hslToRgbWorklet.__initData = closure_2;
  return hslToRgbWorklet;
}();
