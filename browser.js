// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(n){return n===r||n===t}var u=Math.floor;function i(n){return u(n)===n}function o(n){return i(n/2)}function f(n){return o(n>0?n-1:n+1)}var a=Math.sqrt;function c(n){return Math.abs(n)}var y,l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",b=l&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,u,i;if(null==n)return v.call(n);t=n[A],i=A,r=null!=(u=n)&&p.call(u,i);try{n[A]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[A]=t:delete n[A],e}:function(n){return v.call(n)},w="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(w&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?d:function(){throw new Error("not implemented")};var m,s=y,h="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;m=function(){var n,r,t;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,NaN]),t=r,n=(h&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?N:function(){throw new Error("not implemented")};var g,F=m,S="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var n,r,t;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),t=r,n=(S&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?O:function(){throw new Error("not implemented")};var T,j=g,E="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,n=(E&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?L:function(){throw new Error("not implemented")};var W,x={uint16:T,uint8:j};(W=new x.uint16(1))[0]=4660;var M,P,V=52===new x.uint8(W.buffer)[0];!0===V?(M=1,P=0):(M=0,P=1);var Y={HIGH:M,LOW:P},_=new F(1),q=new s(_.buffer),k=Y.HIGH,z=Y.LOW;function B(n,r){return _[0]=r,n[0]=q[k],n[1]=q[z],n}function C(n,r){return 1===arguments.length?B([0,0],n):B(n,r)}var D=!0===V?0:1,J=new F(1),K=new s(J.buffer);function Q(n,r){return J[0]=n,K[D]=r>>>0,J[0]}function R(n){return 0|n}var X,Z,$=!0===V?1:0,nn=new F(1),rn=new s(nn.buffer);function tn(n){return nn[0]=n,rn[$]}!0===V?(X=1,Z=0):(X=0,Z=1);var en={HIGH:X,LOW:Z},un=new F(1),on=new s(un.buffer),fn=en.HIGH,an=en.LOW;function cn(n,r){return on[fn]=n,on[an]=r,un[0]}var yn=[0,0];function ln(n,r){var t,e;return C(yn,n),t=yn[0],t&=2147483647,e=tn(r),cn(t|=e&=2147483648,yn[1])}var vn=!0===V?1:0,pn=new F(1),An=new s(pn.buffer);function bn(n,r){return pn[0]=n,An[vn]=r>>>0,pn[0]}var wn=1023,Un=1048576,dn=[1,1.5],mn=[0,.5849624872207642],sn=[0,1.350039202129749e-8];function hn(r,t){return n(t)||e(t)?(r[0]=t,r[1]=0,r):0!==t&&c(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var In=[0,0],Nn=[0,0];function gn(u,i){var o,f;return 0===i||0===u||n(u)||e(u)?u:(function(n,r){1===arguments.length?hn([0,0],n):hn(n,r)}(In,u),i+=In[1],i+=function(n){var r=tn(n);return(r=(2146435072&r)>>>20)-wn|0}(u=In[0]),i<-1074?ln(0,u):i>1023?u<0?t:r:(i<=-1023?(i+=52,f=2220446049250313e-31):f=1,C(Nn,u),o=Nn[0],o&=2148532223,f*cn(o|=i+wn<<20,Nn[1])))}var Fn=2147483647,Sn=1048575,Hn=1048576,On=2147483647,Tn=1083179008,jn=1e300,En=1e-300,Gn=[0,0],Ln=[0,0];function Wn(u,o){var y,l,v,p,A,b,w,U,d,m,s,h,I,N;if(n(u)||n(o))return NaN;if(C(Gn,o),A=Gn[0],0===Gn[1]){if(0===o)return 1;if(1===o)return u;if(-1===o)return 1/u;if(.5===o)return a(u);if(-.5===o)return 1/a(u);if(2===o)return u*u;if(3===o)return u*u*u;if(4===o)return(u*=u)*u;if(e(o))return function(n,t){return-1===n?(n-n)/(n-n):1===n?1:c(n)<1==(t===r)?0:r}(u,o)}if(C(Gn,u),p=Gn[0],0===Gn[1]){if(0===p)return function(n,e){return e===t?r:e===r?0:e>0?f(e)?n:0:f(e)?ln(r,n):r}(u,o);if(1===u)return 1;if(-1===u&&f(o))return-1;if(e(u))return u===t?Wn(-0,-o):o<0?0:r}if(u<0&&!1===i(o))return(u-u)/(u-u);if(v=c(u),y=p&On|0,l=A&On|0,w=A>>>31|0,b=(b=p>>>31|0)&&f(o)?-1:1,l>1105199104){if(l>1139802112)return function(n,r){return(2147483647&tn(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(u,o);if(y<1072693247)return 1===w?b*jn*jn:b*En*En;if(y>1072693248)return 0===w?b*jn*jn:b*En*En;s=function(n,r){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Q(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n}(Ln,v)}else s=function(n,r,t){var e,u,i,o,f,a,c,y,l,v,p,A,b,w,U,d,m,s,h,I,N;return s=0,t<Un&&(s-=53,t=tn(r*=9007199254740992)),s+=(t>>20)-wn|0,t=1072693248|(h=1048575&t|0),h<=235662?I=0:h<767610?I=1:(I=0,s+=1,t-=Un),o=Q(u=(d=(r=bn(r,t))-(c=dn[I]))*(m=1/(r+c)),0),e=524288+(t>>1|536870912),a=bn(0,e+=I<<18),U=(i=u*u)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Q(a=3+(i=o*o)+(U+=(f=m*(d-o*a-o*(r-(a-c))))*(o+u)),0),b=(p=-7.028461650952758e-9*(l=Q(l=(d=o*a)+(m=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(m-(l-d))+sn[I])-((A=Q(A=(v=.9617967009544373*l)+p+(y=mn[I])+(w=s),0))-w-y-v),n[0]=A,n[1]=b,n}(Ln,v,y);if(m=(o-(U=Q(o,0)))*s[0]+o*s[1],d=U*s[0],C(Gn,h=m+d),I=R(Gn[0]),N=R(Gn[1]),I>=Tn){if(0!=(I-Tn|N))return b*jn*jn;if(m+8008566259537294e-32>h-d)return b*jn*jn}else if((I&On)>=1083231232){if(0!=(I-3230714880|N))return b*En*En;if(m<=h-d)return b*En*En}return h=function(n,r,t){var e,u,i,o,f,a,c,y,l,v;return l=((y=n&Fn|0)>>20)-wn|0,c=0,y>1071644672&&(u=bn(0,((c=n+(Hn>>l+1)>>>0)&~(Sn>>(l=((c&Fn)>>20)-wn|0)))>>>0),c=(c&Sn|Hn)>>20-l>>>0,n<0&&(c=-c),r-=u),n=R(n=tn(a=1-((a=(i=.6931471824645996*(u=Q(u=t+r,0)))+(o=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?gn(a,c):bn(a,n)}(I,d,m),b*h}var xn=1048575,Mn=.4342944818781689;function Pn(r){var e,u,i,o,f,a,c;return n(r)||r<0?NaN:0===r?t:(f=0,(u=tn(r))<1048576&&(f-=54,u=tn(r*=0x40000000000000)),u>=2146435072?r+r:(f+=(u>>20)-wn|0,a=f+=(o=614244+(u&=1048575)&1048576|0)>>20|0,i=function(n){var r,t,e,u,i,o,f,a,c,y,l;return u=tn(n),i=n-1,(xn&2+u)<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(u&=xn)-398458|0,l=440401-u|0,t=(c=(f=(o=i/(2+i))*o)*f)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),e=f*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),a=e+t,(y|=l)>0?o*((r=.5*i*i)+a)-r:o*(a-i))}(r=bn(r,u|1072693248^o)),c=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+i),(c+=(r-(e=Q(r,0))+i)*Mn+e*Mn)+.30102999566361177*a))}return function(r){var t;return n(r)||e(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,t*Wn(10,u(Pn(r))))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).trunc10=r();
//# sourceMappingURL=browser.js.map
