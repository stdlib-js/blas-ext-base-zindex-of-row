"use strict";var p=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(l){throw (a=0, l)}};};var O=p(function(N,E){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),z=require('@stdlib/strided-base-reinterpret-complex128/dist');function H(o,a,l,m,e,s,g,y,R,x,w,t){var i,b,d,h,u,j,v,n,q,r,f;if(o<=0||a<=0)return-1;if(i=z(l,0),b=z(g,0),m*=2,e*=2,s*=2,y*=2,R*=2,G([m,e])){for(u=a,j=o,f=0;f<j;f++){for(v=s+f*m,q=R,r=0;r<u&&!(i[v]!==b[q]||i[v+1]!==b[q+1]);r++)v+=e,q+=y;if(r===u)return f}return-1}for(u=o,j=a,d=m,h=e-u*m,n=t,r=0;r<u;r++)x[n]=1,n+=w;for(v=s,q=R,f=0;f<j;f++){for(n=t,r=0;r<u;r++)(i[v]!==b[q]||i[v+1]!==b[q+1])&&(x[n]=0),v+=d,n+=w;v+=h,q+=y}for(n=t,r=0;r<u&&x[n]!==1;r++)n+=w;return r===u?-1:r}E.exports=H
});var _=p(function(W,V){
var I=require('@stdlib/blas-base-layout-resolve-str/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/strided-base-stride2offset/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),P=O();function Q(o,a,l,m,e,s,g,y,R){var x,w,t,i;if(i=I(o),i===null)throw new TypeError(S('2ivFx',o));if(J(i)?(t=l,x=e,w=1):(t=a,x=1,w=e),e<K(1,t))throw new RangeError(S('2ivIR',t,e));return P(a,l,m,x,w,0,s,g,F(l,g),y,R,F(a,R))}V.exports=Q
});var B=p(function(X,k){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Y=O();U(T,"ndarray",Y);k.exports=T
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=B(),c,C=$(Z(__dirname,"./native.js"));L(C)?c=M:c=C;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
