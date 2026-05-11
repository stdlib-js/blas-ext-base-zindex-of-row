"use strict";var p=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var O=p(function(W,d){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex128/dist');function H(e,a,s,f,i,w,g,R,l,m,x,o){var y,b,h,z,u,j,v,n,t,r,q;if(e<=0||a<=0)return-1;if(y=E(s,0),b=E(g,0),f*=2,i*=2,w*=2,R*=2,l*=2,G([f,i])){for(u=a,j=e,q=0;q<j;q++){for(v=w+q*f,t=l,r=0;r<u&&!(y[v]!==b[t]||y[v+1]!==b[t+1]);r++)v+=i,t+=R;if(r===u)return q}return-1}for(u=e,j=a,h=f,z=i-u*f,n=o,r=0;r<u;r++)m[n]=1,n+=x;for(v=w,t=l,q=0;q<j;q++){for(n=o,r=0;r<u;r++)(y[v]!==b[t]||y[v+1]!==b[t+1])&&(m[n]=0),v+=h,n+=x;v+=z,t+=R}for(n=o,r=0;r<u&&m[n]!==1;r++)n+=x;return r===u?-1:r}d.exports=H
});var _=p(function(X,V){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),K=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=O();function U(e,a,s,f,i,w,g,R,l){var m,x,o;if(!I(e))throw new TypeError(S('nullFx',e));if(J(e)?o=s:o=a,i<P(1,o))throw new RangeError(S('nullIR',o,i));return K(e)?(m=1,x=i):(m=i,x=1),Q(a,s,f,m,x,0,w,g,F(s,g),R,l,F(a,l))}V.exports=U
});var k=p(function(A,T){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=_(),Z=O();Y(C,"ndarray",Z);T.exports=C
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=k(),c,B=M($(__dirname,"./native.js"));L(B)?c=D:c=B;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
