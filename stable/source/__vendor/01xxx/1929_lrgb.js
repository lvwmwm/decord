// Module ID: 1929
// Function ID: 1930
// Name: lrgb
// Dependencies: []

// Module 1929 (lrgb)
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
const items = [{ code: "(function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;})" }];
[tmp2] = items;
function pnpm_lrgbTs1() {
  let result;
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute > 0.0031308) {
    const _Math = Math;
    const _Math2 = Math;
    const tmp3 = Math.sign(num) || 1;
    result = tmp3 * (1.055 * Math.pow(absolute, 0.4166666666666667) - 0.055);
  } else {
    result = 12.92 * num;
  }
  return result;
}
pnpm_lrgbTs1.__workletHash = 5265218603714;
pnpm_lrgbTs1.__initData = tmp2;
const items1 = [{ code: "(function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){let[channelFromLrgb]=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};})" }, pnpm_lrgbTs1];
[tmp3, tmp4] = items1;
function pnpm_lrgbTs2(arg0) {
  let alpha;
  let b;
  let g;
  const obj = { r: _undefined(arg0.r), g: _undefined(g), b: _undefined(b), alpha };
  ({ g, b, alpha } = arg0);
  return obj;
}
const items2 = [tmp4];
pnpm_lrgbTs2.__closure = items2;
pnpm_lrgbTs2.__workletHash = 7397840547621;
pnpm_lrgbTs2.__initData = tmp3;
const items3 = [{ code: "(function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);})" }];
[tmp5] = items3;
function pnpm_lrgbTs3() {
  let result;
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute <= 0.04045) {
    result = num / 12.92;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const tmp2 = Math.sign(num) || 1;
    result = tmp2 * Math.pow((absolute + 0.055) / 1.055, 2.4);
  }
  return result;
}
pnpm_lrgbTs3.__workletHash = 12729944084267;
pnpm_lrgbTs3.__initData = tmp5;
const items4 = [{ code: "(function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){let[channelToLrgb]=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};})" }, pnpm_lrgbTs3];
let c0;
[tmp6, tmp7] = items4;
function pnpm_lrgbTs4(arg0) {
  let alpha;
  let b;
  let g;
  const obj = { r: _undefined(arg0.r), g: _undefined(g), b: _undefined(b), alpha };
  ({ g, b, alpha } = arg0);
  return obj;
}
const items5 = [tmp7];
pnpm_lrgbTs4.__closure = items5;
pnpm_lrgbTs4.__workletHash = 11818237099427;
pnpm_lrgbTs4.__initData = tmp6;
let obj = { convert: { fromRgb: pnpm_lrgbTs4, toRgb: pnpm_lrgbTs2 } };

export default obj;
