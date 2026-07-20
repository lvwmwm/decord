// Module ID: 1754
// Function ID: 19605
// Name: pnpm_lrgbTs1
// Dependencies: []

// Module 1754 (pnpm_lrgbTs1)
/* worklet (recovered source) */ function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;}
pnpm_lrgbTs1.__closure = {};
pnpm_lrgbTs1.__workletHash = 9046778946531;
pnpm_lrgbTs1.__initData = { code: "function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;}" };
/* worklet (recovered source) */ function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){const{channelFromLrgb}=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};}
pnpm_lrgbTs2.__closure = { channelFromLrgb: pnpm_lrgbTs1 };
pnpm_lrgbTs2.__workletHash = 2514333579516;
pnpm_lrgbTs2.__initData = { code: "function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){const{channelFromLrgb}=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};}" };
/* worklet (recovered source) */ function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);}
pnpm_lrgbTs3.__closure = {};
pnpm_lrgbTs3.__workletHash = 7878321042954;
pnpm_lrgbTs3.__initData = { code: "function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);}" };
/* worklet (recovered source) */ function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){const{channelToLrgb}=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};}
pnpm_lrgbTs4.__closure = { channelToLrgb: pnpm_lrgbTs3 };
pnpm_lrgbTs4.__workletHash = 7438857771706;
pnpm_lrgbTs4.__initData = { code: "function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){const{channelToLrgb}=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};}" };
arg5.default = { convert: { fromRgb: pnpm_lrgbTs4, toRgb: pnpm_lrgbTs2 } };
