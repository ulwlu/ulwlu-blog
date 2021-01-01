"use strict";require("@sveltejs/kit/dist/renderer");var e=require("./app.js"),t=require("./globalstyle.js");const r=e.create_ssr_component(((r,a,l,s)=>`${e.validate_component(t.default,"GlobalStyle").$$render(r,{},{},{})}\n<main>${s.default?s.default({}):""}</main>`));exports.default=r;
//# sourceMappingURL=$layout.js.map
