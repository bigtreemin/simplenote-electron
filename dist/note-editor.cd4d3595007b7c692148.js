"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9403],{12172:function(e,t,o){o.r(t),o.d(t,{NoteEditor:function(){return j},default:function(){return G}});var i=o(41705),n=o(63696),s=o(80249),r=o(255);function a(){return n.createElement("svg",{className:"icon-chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.createElement("rect",{x:"0",fill:"none",width:"24",height:"24"}),n.createElement("path",{d:"M10.11 21.19L8.7 19.78 16.48 12 8.7 4.22l1.41-1.41L19.3 12 10.11 21.19z"}))}var l=e=>{var{selectedSearchMatchIndex:t,numberOfMatchesInNote:o,setSearchSelection:i}=e;return n.createElement("div",{className:"search-results"},n.createElement("div",null,null===t?"".concat(o," ").concat(o>1?"Results":"Result"):"".concat(t+1," of ").concat(o)),n.createElement("span",{className:"search-results-next"},n.createElement(r.A,{disabled:o<=1,icon:n.createElement(a,null),onClick:e=>{i((o+(null!=t?t:-1)+1)%o)},title:"Next"})),n.createElement("span",{className:"search-results-prev"},n.createElement(r.A,{disabled:o<=1,icon:n.createElement(a,null),onClick:e=>{i((o+(null!=t?t:-1)-1)%o)},title:"Prev"})))};l.displayName="SearchResultsBar";var d=(0,s.Ng)((e=>{var{ui:{selectedSearchMatchIndex:t,numberOfMatchesInNote:o}}=e;return{selectedSearchMatchIndex:t,numberOfMatchesInNote:o}}),(e=>({setSearchSelection:t=>e({type:"STORE_SEARCH_SELECTION",index:t})})))(l),c=o(60832),h=o(17243),u=o(59874),g=o(27528),p=(0,s.Ng)(null,(e=>({openShareDialog:()=>e((0,g.showDialog)("SHARE"))})))((e=>{var{openShareDialog:t}=e;return n.createElement("div",{className:"tag-email-tooltip"},n.createElement("div",{className:"tag-email-tooltip__arrow"}),n.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",n.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))})),m=o(70103),v=e=>{if(!e||!window.getSelection)return 0;var t=window.getSelection();if(!t||t.rangeCount<1)return 0;var o=t.getRangeAt(0),i=o.cloneRange();return i.selectNodeContents(e),i.setEnd(o.endContainer,o.endOffset),i.toString().length};class f extends n.Component{constructor(){for(var e,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];super(...o),e=this,(0,i.A)(this,"caretPosition",0),(0,i.A)(this,"state",{isComposing:!1}),(0,i.A)(this,"completeSuggestion",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.identity,{onChange:o,note:i,tags:n,value:s}=e.props;if(s.length){var r=null;for(var a of n.values())if(!i.tags.includes(a.name)&&a.name.startsWith(s)){r=a.name;break}r&&o(r,(()=>{var o;t(r),e.caretPosition=(null===(o=r)||void 0===o?void 0:o.length)||0,e.focusInput()}))}})),(0,i.A)(this,"focusInput",(()=>{if(this.inputField){var e=this.inputField;e.focus();var t=document.createRange();t.selectNodeContents(e),null!==e.firstChild&&t.toString().length>this.caretPosition&&t.setEnd(e.firstChild,this.caretPosition),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}})),(0,i.A)(this,"hasFocus",(()=>document.activeElement===this.inputField)),(0,i.A)(this,"interceptKeys",(e=>(0,h.invoke)({13:this.submitTag,32:this.submitTag,188:this.submitTag,9:this.interceptTabPress,39:this.interceptRightArrow},e.keyCode,e))),(0,i.A)(this,"interceptRightArrow",(e=>{var{value:t}=this.props;v(e.currentTarget)===t.length&&(this.completeSuggestion(),e.preventDefault(),e.stopPropagation())})),(0,i.A)(this,"interceptTabPress",(e=>{this.completeSuggestion(this.submitTag),e.preventDefault(),e.stopPropagation()})),(0,i.A)(this,"onInputMutation",(e=>{e.forEach((e=>{var t=(0,h.get)(e,"target.data","");"childList"===e.type&&e.addedNodes.length&&(t=(0,h.get)(e,"target.innerText","")),this.onInput(t)}))})),(0,i.A)(this,"onInput",(function(t){var{moveCaretToEndOfValue:o=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.state.isComposing||(e.caretPosition=o?t.length:v(e.inputField),e.props.onChange(t.trim(),e.focusInput))})),(0,i.A)(this,"onCompositionEnd",(e=>{var t=e.target.textContent;this.setState({isComposing:!1},(()=>this.onInput(t)))})),(0,i.A)(this,"parsePastedInput",(e=>{var t;(0,h.get)(e,"clipboardData.getData")?t=e.clipboardData.getData("text/plain"):(0,h.get)(window,"clipboardData.getData")&&(t=window.clipboardData.getData("Text"));var o=t.split(/\s|,|\n/),i=o.slice(0,o.length-1),[n]=o.slice(o.length-1);i.filter(Boolean).forEach(this.props.onSelect),this.onInput(n,{moveCaretToEndOfValue:!0}),e.preventDefault(),e.stopPropagation()})),(0,i.A)(this,"storeInput",(e=>{this.inputField=e,this.props.inputRef(e),(0,h.invoke)(this,"inputField.addEventListener","paste",this.parsePastedInput,!1)})),(0,i.A)(this,"submitTag",(e=>{var{onSelect:t,value:o}=this.props;o.trim().length&&t(o.trim()),(0,h.invoke)(e,"preventDefault"),(0,h.invoke)(e,"stopPropagation")}))}componentDidMount(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}componentWillUnmount(){(0,h.invoke)(this,"inputField.removeEventListener","paste",this.parsePastedInput,!1),this.inputObserver.disconnect()}render(){var{note:e,tags:t,value:o}=this.props,i=null;if(o.length>0)for(var s of t.values())if(!e.tags.includes(s.name)&&s.name.startsWith(o)){i=s.name;break}var r=""===o&&!this.state.isComposing;return n.createElement("div",{className:"tag-input",onClick:()=>{this.caretPosition=v(this.inputField),this.focusInput()}},r&&n.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add tag…"),n.createElement("div",{"aria-label":"Add tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onBlur:this.submitTag,onCompositionStart:()=>this.setState({isComposing:!0}),onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},o),n.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},i?i.substring(o.length):""))}}(0,i.A)(f,"displayName","TagInput"),(0,i.A)(f,"defaultProps",{inputRef:h.identity,onChange:h.identity,onSelect:h.identity,storeFocusInput:h.noop,storeHasFocus:h.noop});var S=(0,s.Ng)((e=>({note:e.data.notes.get(e.ui.openedNote),tags:e.data.tags})))(f),b=o(4452),C=o.n(b),y=o(62285),E=o(1962);class N extends n.Component{constructor(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];super(...t),(0,i.A)(this,"container",(0,n.createRef)()),(0,i.A)(this,"tagInput",(0,n.createRef)()),(0,i.A)(this,"state",{selectedTag:"",showEmailTooltip:!1,tagInput:""}),(0,i.A)(this,"addTag",(e=>{var{note:t,noteId:o}=this.props,i=e.trim().replace(/\s+/g,",").split(",");i.some(u.A)&&this.showEmailTooltip();var n=new Set(t.tags.map(y.YG));i.forEach((e=>{n.has((0,y.YG)(e))||(n.add((0,y.YG)(e)),this.props.addTag(o,e))})),this.storeTagInput(""),(0,h.invoke)(this,"tagInput.focus")})),(0,i.A)(this,"hasSelection",(()=>this.state.selectedTag&&!!this.state.selectedTag.length)),(0,i.A)(this,"deleteTag",(e=>{var{noteId:t}=this.props,{selectedTag:o}=this.state;this.props.removeTag(t,e),o===e&&this.setState({selectedTag:""},(()=>{var e;return null===(e=this.tagInput)||void 0===e||null===(e=e.current)||void 0===e?void 0:e.focus()}))})),(0,i.A)(this,"deleteSelection",(()=>{this.hasSelection()&&this.deleteTag(this.state.selectedTag)})),(0,i.A)(this,"hideEmailTooltip",(()=>this.setState({showEmailTooltip:!1}))),(0,i.A)(this,"hasFocus",(()=>!!this.inputHasFocus&&this.inputHasFocus())),(0,i.A)(this,"focusTagField",(()=>this.focusInput&&this.focusInput())),(0,i.A)(this,"interceptKeys",(e=>{if(8===e.which){if(""!==this.state.tagInput)return;return this.hasSelection()&&this.deleteSelection(),this.selectLastTag(),void e.preventDefault()}if(39===e.which&&this.hasSelection())return this.unselect(e),void this.focusTagField();(9===e.which&&this.hasSelection()||this.hasSelection())&&this.unselect(e)})),(0,i.A)(this,"preventStealingFocus",(e=>{var{ctrlKey:t,key:o,metaKey:i,shiftKey:n}=e;if(this.props.keyboardShortcuts)return(t||i)&&n&&"y"===o.toLowerCase()&&this.setState({selectedTag:""}),!0})),(0,i.A)(this,"selectLastTag",(()=>{var e;return this.setState({selectedTag:null===(e=this.props.note)||void 0===e?void 0:e.tags.slice(-1).shift()})})),(0,i.A)(this,"selectTag",(e=>{var{currentTarget:{dataset:{tagName:t}}}=e;e.preventDefault(),e.stopPropagation(),this.deleteTag(t)})),(0,i.A)(this,"showEmailTooltip",(()=>{this.setState({showEmailTooltip:!0}),setTimeout((()=>this.setState({showEmailTooltip:!1})),5e3)})),(0,i.A)(this,"onKeyDown",(e=>(this.state.showEmailTooltip&&this.hideEmailTooltip(),this.interceptKeys(e)))),(0,i.A)(this,"storeFocusInput",(e=>this.focusInput=e)),(0,i.A)(this,"storeHasFocus",(e=>this.inputHasFocus=e)),(0,i.A)(this,"storeHiddenTag",(e=>this.hiddenTag=e)),(0,i.A)(this,"storeInputRef",(e=>this.tagInput=e)),(0,i.A)(this,"storeTagInput",((e,t)=>this.setState({tagInput:e},t))),(0,i.A)(this,"unselect",(e=>{var t,o;this.state.selectedTag&&((null===(t=this.hiddenTag)||void 0===t?void 0:t.current)===e.relatedTarget&&void 0!==(null===(o=this.hiddenTag)||void 0===o?void 0:o.current)||this.setState({selectedTag:""}))}))}componentDidMount(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0),window.addEventListener("keydown",this.preventStealingFocus,!0)}componentWillUnmount(){document.removeEventListener("click",this.unselect,!0),window.removeEventListener("keydown",this.preventStealingFocus,!0)}componentDidUpdate(){var e;this.hasSelection()&&(null===(e=this.hiddenTag)||void 0===e||null===(e=e.current)||void 0===e||e.focus())}render(){var{tags:e}=this.props,{selectedTag:t,showEmailTooltip:o,tagInput:i}=this.state;return n.createElement("div",{ref:this.container,className:"tag-field"},n.createElement("div",{"aria-label":"List of tags for the current note, click a tag to remove it",className:C()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:-1,onKeyDown:this.onKeyDown},n.createElement("input",{"aria-hidden":"true",className:"hidden-tag",tabIndex:-1,ref:this.storeHiddenTag}),e.map((e=>n.createElement(m.A,{key:e,tagName:e,selected:e===t,onSelect:this.selectTag}))),n.createElement(S,{inputRef:this.storeInputRef,value:i,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus}),n.createElement(c.A,{container:this.container.current,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:o,target:this.tagInput.current},(()=>n.createElement(p,null)))))}}(0,i.A)(N,"displayName","TagField");var A=(0,s.Ng)((e=>{var t=e.ui.openedNote,o=t?e.data.notes.get(t):void 0;return{tags:t?(0,E.g7)(e,o):[],keyboardShortcuts:e.settings.keyboardShortcuts,noteId:t,note:o}}),{addTag:(e,t)=>({type:"ADD_NOTE_TAG",noteId:e,tagName:t}),removeTag:(e,t)=>({type:"REMOVE_NOTE_TAG",noteId:e,tagName:t})})(N),T=o(65871),w=o(9679),I=o(71559),k=o(61943),F=o(48940),M=o(16742),L=()=>{sessionStorage.removeItem("note_positions")},x=()=>{var e,t=sessionStorage.getItem("note_positions");if(t)try{return JSON.parse(t)}catch(e){return{}}else e={};return e},D=o(67893),O=o(51938);function R(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function P(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?R(Object(o),!0).forEach((function(t){(0,i.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}o(15423)._menuItems;class K extends n.Component{constructor(){super(...arguments),(0,i.A)(this,"bootTimer",null),(0,i.A)(this,"editor",null),(0,i.A)(this,"monaco",null),(0,i.A)(this,"contentDiv",(0,n.createRef)()),(0,i.A)(this,"decorations",[]),(0,i.A)(this,"matchesInNote",[]),(0,i.A)(this,"overviewRuler",{color:"#3361cc",position:w.EN.OverviewRulerLane.Full}),(0,i.A)(this,"state",{content:"",editor:"fast",noteId:null,overTodo:!1,searchQuery:""}),(0,i.A)(this,"toggleShortcuts",(e=>{e?window.addEventListener("keydown",this.handleShortcut,!0):window.removeEventListener("keydown",this.handleShortcut,!0)})),(0,i.A)(this,"completionProvider",((e,t)=>({triggerCharacters:["["],provideCompletionItems(t,o,i,n){var s=t.getLineContent(o.lineNumber),r=s.lastIndexOf("[",o.column),a=s.lastIndexOf("]",o.column),l=r>=0&&a<r?r:-1,d=l>=0?s.slice(l+1,o.column):"",c=(0,I.Sz)({collection:{type:"all"},excludeIDs:e?[e]:[],searchTags:(0,I.u)(d),searchTerms:(0,F.S)(d),titleOnly:!0},5).filter((e=>{var[t,o]=e;return void 0!==o})).map((e=>{var[t,o]=e;return P({noteId:t,content:o.content,isPinned:o.systemTags.includes("pinned")},(0,M.Cb)(o))})),h=l>=0?[{text:"",range:{startLineNumber:o.lineNumber,startColumn:l,endLineNumber:o.lineNumber,endColumn:o.column}}]:[];return{incomplete:!0,suggestions:c.map(((e,t)=>({additionalTextEdits:h,kind:e.isPinned?w.eo.CompletionItemKind.Snippet:w.eo.CompletionItemKind.File,label:e.title,documentation:e.content,insertText:"[".concat(e.title,"](simplenote://note/").concat(e.noteId,")"),sortText:t.toString(),range:{startLineNumber:o.lineNumber,startColumn:o.column,endLineNumber:o.lineNumber,endColumn:o.column}})))}}}))),(0,i.A)(this,"handleShortcut",(e=>{var{ctrlKey:t,metaKey:o,shiftKey:i}=e,n=e.key.toLowerCase(),s=t||o;return s&&i&&"g"===n?(this.setPrevSearchSelection(),e.stopPropagation(),e.preventDefault(),!1):window.electron||!s||i||"g"!==n?void 0:(this.setNextSearchSelection(),e.stopPropagation(),e.preventDefault(),!1)})),(0,i.A)(this,"setDecorators",(()=>{var e,t;this.matchesInNote=null!==(e=this.searchMatches())&&void 0!==e?e:[],this.props.storeNumberOfMatchesInNote(this.matchesInNote.length);var o=null!==(t=this.getTitleDecoration())&&void 0!==t?t:[];this.editor.changeDecorations((e=>{this.decorations=e.deltaDecorations(this.decorations,[...this.matchesInNote,...o])}))})),(0,i.A)(this,"getTitleDecoration",(()=>{var e,t,o=null===(e=this.editor)||void 0===e?void 0:e.getModel();if(o)for(var i=1;i<=o.getLineCount();i++)if(o.getLineContent(i).trim().length>0)return[(t=i,{range:new w.Q6(t,1,t,1),options:{isWholeLine:!0,inlineClassName:"note-title",stickiness:w.EN.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}})]})),(0,i.A)(this,"searchMatches",(()=>{if(this.editor&&this.props.searchQuery){var e=this.editor.getModel(),t=(0,F.S)(this.props.searchQuery).map((e=>e.normalize().toLowerCase())).filter((e=>e.trim().length>0));if(0===t.length)return[];var o=e.getValue().normalize().toLowerCase();return t.reduce(((t,i)=>{for(var n=null,s=0;-1!==n&&-1!==(n=o.indexOf(i,s));){s=n+i.length;var r=e.getPositionAt(n),a=e.getPositionAt(n+i.length);t.push({options:{inlineClassName:"search-decoration",overviewRuler:this.overviewRuler},range:{startLineNumber:r.lineNumber,startColumn:r.column,endLineNumber:a.lineNumber,endColumn:a.column}})}return t}),[])}})),(0,i.A)(this,"focusEditor",(()=>{var e;return null===(e=this.editor)||void 0===e?void 0:e.focus()})),(0,i.A)(this,"hasFocus",(()=>{var e;return(null===(e=this.editor)||void 0===e?void 0:e.hasTextFocus())||!1})),(0,i.A)(this,"handleChecklist",(e=>{var t;null===(t=this.editor)||void 0===t||t.trigger("editorCommand","insertChecklist",null)})),(0,i.A)(this,"handleUndoRedo",(e=>{var t,o,i=e;switch(i.inputType){case"historyUndo":return null===(t=this.editor)||void 0===t||t.trigger("browserMenu","undo",null),i.preventDefault(),void i.stopPropagation();case"historyRedo":return null===(o=this.editor)||void 0===o||o.trigger("browserMenu","redo",null),i.preventDefault(),void i.stopPropagation()}})),(0,i.A)(this,"cancelSelectionOrSearch",(e=>{this.props.searchQuery.length>0&&this.matchesInNote.length>0?this.props.clearSearch():e.trigger("customAction","cancelSelection",null)})),(0,i.A)(this,"insertOrRemoveCheckboxes",(e=>{var t=e.getSelection();if(t)for(var o=t.startLineNumber;o<=t.endLineNumber;o++)this.toggleChecklistForLine(e,o);else{var i=e.getPosition();if(!i)return;this.toggleChecklistForLine(e,i.lineNumber)}})),(0,i.A)(this,"toggleChecklistForLine",((e,t)=>{var o,i,n=e.getModel();if(n){var s=n.getLineContent(t),r=/^(\s*)([-+*\u2022]\s*)?([\ue000\ue001]\s+)?/.exec(s);if(r){var[a,l,d,c]=r,h=void 0!==c,u=l.length+(null!==(o=null==d?void 0:d.length)&&void 0!==o?o:0)+1,g=h?"":" ",p={identifier:{major:1,minor:1},range:new w.Q6(t,u,t,u+(null!==(i=null==c?void 0:c.length)&&void 0!==i?i:0)),text:g,forceMoveMarkers:!0};e.executeEdits("insertOrRemoveCheckboxes",[p]),this.props.insertTask()}}})),(0,i.A)(this,"editorInit",(e=>{w.EN.defineTheme("simplenote",{base:"vs",inherit:!0,rules:[],colors:{"editor.foreground":"#2c3338","editor.background":"#ffffff","editor.selectionBackground":"#ced9f2","scrollbarSlider.activeBackground":"#8c8f94","scrollbarSlider.background":"#c3c4c7","scrollbarSlider.hoverBackground":"#a7aaad","textLink.foreground":"#1d4fc4"}}),w.EN.defineTheme("simplenote-dark",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.foreground":"#ffffff","editor.background":"#1d2327","editor.selectionBackground":"#646970","scrollbarSlider.activeBackground":"#646970","scrollbarSlider.background":"#2c3338","scrollbarSlider.hoverBackground":"#1d2327","textLink.foreground":"#ced9f2"}})})),(0,i.A)(this,"editorReady",((e,t)=>{var o,i,n;this.editor=e,t.languages.registerLinkProvider("plaintext",{provideLinks:e=>({links:e.findMatches("simplenote://note/[a-zA-Z0-9-]+",!0,!0,!1,null,!1).map((e=>{var{range:t}=e;return{range:t}}))}),resolveLink:t=>{var o,i,n=null!==(o=null===(i=e.getModel())||void 0===i?void 0:i.getValueInRange(t.range))&&void 0!==o?o:"",s=/^simplenote:\/\/note\/(.+)$/.exec(n);if(s){var[r,a]=s;return this.props.notes.has(a)&&this.props.openNote(a),P(P({},t),{},{url:"#"})}}});var s=["editor.action.quickCommand","editor.action.commentLine","editor.action.transposeLetters","expandLineSelection","editor.action.gotoLine","editor.action.changeAll","actions.find","actions.findWithSelection","editor.action.addSelectionToNextFindMatch","editor.action.nextMatchFindAction","editor.action.selectHighlights"];window.electron&&D.cX&&s.push("undo","redo","editor.action.selectAll"),s.forEach((function(e){t.editor.addKeybindingRule({keybinding:0,command:"-"+e})})),e.createContextKey("allowBrowserKeybinding",!window.electron),e.addAction({id:"context_undo",label:"Undo",keybindings:[t.KeyMod.CtrlCmd|t.KeyCode.KeyZ],keybindingContext:"allowBrowserKeybinding",contextMenuGroupId:"1_modification",contextMenuOrder:2,run:()=>{e.trigger("contextMenu","undo",null)}}),e.addAction({id:"context_redo",label:"Redo",keybindings:[t.KeyMod.WinCtrl|t.KeyCode.KeyY,t.KeyMod.CtrlCmd|t.KeyMod.Shift|t.KeyCode.KeyZ],keybindingContext:"allowBrowserKeybinding",contextMenuGroupId:"1_modification",contextMenuOrder:3,run:()=>{e.trigger("contextMenu","redo",null)}}),e.addAction({id:"cancel_selection",label:"Cancel Selection",keybindings:[t.KeyCode.Escape],keybindingContext:"!suggestWidgetVisible",run:this.cancelSelectionOrSearch}),e.addAction({id:"select_all",label:"Select All",contextMenuGroupId:"9_cutcopypaste",contextMenuOrder:4,keybindings:[t.KeyMod.CtrlCmd|t.KeyCode.KeyA],keybindingContext:"allowBrowserKeybinding",run:()=>{var t,o=null===(t=e.getModel())||void 0===t?void 0:t.getFullModelRange();o&&e.setSelection(o)}}),e.addAction({id:"insertChecklist",label:"Insert Checklist",keybindings:[t.KeyMod.CtrlCmd|t.KeyMod.Shift|t.KeyCode.KeyC,t.KeyMod.WinCtrl|t.KeyMod.Shift|t.KeyCode.KeyC],keybindingContext:"allowBrowserKeybinding",contextMenuGroupId:"10_checklist",contextMenuOrder:1,run:this.insertOrRemoveCheckboxes}),e.addCommand(t.KeyCode.Tab,(()=>{var t,o,i=null===(t=e.getPosition())||void 0===t?void 0:t.lineNumber;if(i){var n=null===(o=e.getModel())||void 0===o?void 0:o.getLineContent(i);n&&/^(\s*)([-+*\u2022\ue000\ue001])(\s+)/.test(n)?e.trigger("commands","editor.action.indentLines",null):e.trigger("commands","tab",null)}})),null===(o=window.electron)||void 0===o||o.receive("editorCommand",(t=>{switch(t.action){case"findAgain":return void this.setNextSearchSelection();case"insertChecklist":return void e.trigger("editorCommand","insertChecklist",null);case"redo":return void(e.hasTextFocus()?e.trigger("editorCommand","redo",null):document.execCommand("redo"));case"selectAll":if(e.hasTextFocus()){var o,i=null===(o=e.getModel())||void 0===o?void 0:o.getFullModelRange();i&&e.setSelection(i)}else document.execCommand("selectAll");return;case"undo":return void(e.hasTextFocus()?e.trigger("editorCommand","undo",null):document.execCommand("undo"))}})),window.electron||window.addEventListener("input",this.handleUndoRedo,!0),this.setDecorators(),this.setState({}),e.onDidChangeModelContent((()=>this.setDecorators()));var r=t.languages.registerCompletionItemProvider("plaintext",this.completionProvider(this.state.noteId,e));e.onDidDispose((()=>null==r?void 0:r.dispose())),document.oncopy=e=>{var t;null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",(0,O.TC)(e.clipboardData.getData("text/plain")))};var[a,l,d]=this.props.editorSelection,c=null===(i=this.editor.getModel())||void 0===i?void 0:i.getPositionAt(a),h=null===(n=this.editor.getModel())||void 0===n?void 0:n.getPositionAt(l);this.editor.setSelection(w.LN.createWithDirection(null==c?void 0:c.lineNumber,null==c?void 0:c.column,null==h?void 0:h.lineNumber,null==h?void 0:h.column,"RTL"===d?w.SB.RTL:w.SB.LTR)),e.revealLine(c.lineNumber,w.EN.ScrollType.Immediate),e.onDidChangeCursorSelection((t=>{var o,i;if(t.reason!==w.EN.CursorChangeReason.Undo&&t.reason!==w.EN.CursorChangeReason.Redo){var n=null===(o=e.getModel())||void 0===o?void 0:o.getOffsetAt(t.selection.getStartPosition()),s=null===(i=e.getModel())||void 0===i?void 0:i.getOffsetAt(t.selection.getEndPosition()),r=t.selection.getDirection()===w.SB.LTR?"LTR":"RTL";this.props.storeEditorSelection(this.props.noteId,n,s,r)}})),e.onMouseMove((t=>{var{content:o}=this.state,{target:{range:i}}=t;if(i&&!(i.endColumn-i.startColumn>1)){var n=e.getModel();if(n){var s=n.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),r=""===o[s]||""===o[s];this.state.overTodo!==r&&this.setState({overTodo:r})}}})),e.onMouseDown((t=>{var{editNote:o,noteId:i}=this.props,{content:n}=this.state,{target:{range:s}}=t;if(s&&!(s.endColumn-s.startColumn>1)){var r=e.getModel();if(r){var a=r.getOffsetAt({lineNumber:s.startLineNumber,column:s.startColumn});""===n[a]?o(i,{content:(0,O.TC)(n.slice(0,a)+""+n.slice(a+1))}):""===n[a]&&o(i,{content:(0,O.TC)(n.slice(0,a)+""+n.slice(a+1))})}}}))})),(0,i.A)(this,"updateNote",((e,t)=>{var{editNote:o,noteId:i}=this.props;if(this.editor){var n=(()=>{if(this.editor&&!t.isRedoing&&!t.isUndoing){var o=t.changes.find((e=>{var{text:t}=e;return("\r"===t[0]||"\n"===t[0])&&""===t.trim()}));if(o){var i=o.range.startLineNumber;if(0!==i&&i===o.range.endLineNumber){var n=this.editor.getModel(),s=n.getLineContent(i),r=/^(\s*)([-+*\u2022\ue000\ue001])(\s+)/.exec(s);if(null!==r){var a=n.getLineContent(i+1);if(/^\s*$/.test(a)){if(0!==a.trim().length||s.length!==r[0].length){var l=n.getOffsetAt({column:0,lineNumber:i+1}),d=n.getOffsetAt({column:0,lineNumber:i+2}),c={identifier:{major:1,minor:1},range:new w.Q6(i+1,0,i+1,a.length),text:r[0].replace("",""),forceMoveMarkers:!0};return this.editor.executeEdits("autolist",[c]),Promise.resolve().then((()=>this.editor.setPosition({column:r[0].length+1,lineNumber:i+1}))),e.slice(0,l)+r[0].replace("","")+t.eol+e.slice(d)}n.getOffsetAt({column:0,lineNumber:i}),n.getOffsetAt({column:0,lineNumber:i+1});var h={identifier:{major:1,minor:1},range:new w.Q6(i,0,i+1,a.length+1),text:null,forceMoveMarkers:!0};Promise.resolve().then((()=>{this.editor.executeEdits("autolist",[h]),this.editor.setPosition({column:0,lineNumber:i})}))}}}}}})()||e;o(i,{content:(0,O.TC)(n)})}})),(0,i.A)(this,"setNextSearchSelection",(()=>{var{selectedSearchMatchIndex:e}=this.props,t=this.matchesInNote.length,o=(t+(null!=e?e:-1)+1)%t;this.props.storeSearchSelection(o),this.setSearchSelection(o),this.focusEditor()})),(0,i.A)(this,"setPrevSearchSelection",(()=>{var{selectedSearchMatchIndex:e}=this.props,t=this.matchesInNote.length,o=(t+(null!=e?e:t)-1)%t;this.props.storeSearchSelection(o),this.setSearchSelection(o),this.focusEditor()})),(0,i.A)(this,"setSearchSelection",(e=>{if(this.matchesInNote.length&&null!==e){var t=this.matchesInNote[e].range;if(t){this.editor.setSelection(t),this.editor.revealLineInCenter(t.startLineNumber);var o=[];this.matchesInNote.forEach((e=>{var i;i=e.range===t?{range:e.range,options:{inlineClassName:"selected-search",overviewRuler:this.overviewRuler}}:{range:e.range,options:{inlineClassName:"search-decoration",overviewRuler:this.overviewRuler}},o.push(i)})),this.editor.changeDecorations((e=>{this.decorations=e.deltaDecorations(this.decorations,o)}))}}}))}static getDerivedStateFromProps(e,t){var o=e.note.content.length>5e3,i=e.note.content!==t.content,n=e.noteId!==t.noteId,s=i?n&&o?e.note.content.slice(0,e.editorSelection[1]+5e3):(0,O.yK)(e.note.content):t.content,r=n?o?"fast":"full":t.editor,a=e.searchQuery!==t.searchQuery;return(n||a)&&e.storeSearchSelection(null),{content:s,editor:r,noteId:e.noteId,searchQuery:e.searchQuery}}componentDidMount(){var{noteId:e}=this.props;this.bootTimer=setTimeout((()=>{if(e===this.props.noteId){this.setState({editor:"full",content:(0,O.yK)(this.props.note.content)});var t,o=(e=>{var t=x();return t?t[e]:0})(e);o&&(null===(t=this.editor)||void 0===t||t.setScrollPosition({scrollTop:o}))}}),120),this.focusEditor(),this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus),window.addEventListener("resize",L),window.addEventListener("toggleChecklist",this.handleChecklist,!0),this.toggleShortcuts(!0)}componentWillUnmount(){var e,t,o,i,n,s;i=this.props.noteId,n=null!==(e=null===(t=this.editor)||void 0===t?void 0:t.getScrollTop())&&void 0!==e?e:0,(s=x())&&(s[i]=n,sessionStorage.setItem("note_positions",JSON.stringify(s))),this.bootTimer&&clearTimeout(this.bootTimer),null===(o=window.electron)||void 0===o||o.removeListener("editorCommand"),window.removeEventListener("input",this.handleUndoRedo,!0),window.removeEventListener("toggleChecklist",this.handleChecklist,!0),window.removeEventListener("resize",L,!0),this.toggleShortcuts(!1)}componentDidUpdate(e){var t,o,{editorSelection:[i,n,s]}=e,{editorSelection:[r,a,l]}=this.props;if(this.editor&&"full"===this.state.editor&&(i!==r||n!==a||s!==l)){var d,c,h=null===(d=this.editor.getModel())||void 0===d?void 0:d.getPositionAt(r),u=null===(c=this.editor.getModel())||void 0===c?void 0:c.getPositionAt(a);this.editor.setSelection(w.LN.createWithDirection(null==h?void 0:h.lineNumber,null==h?void 0:h.column,null==u?void 0:u.lineNumber,null==u?void 0:u.column,"RTL"===l?w.SB.RTL:w.SB.LTR))}""===this.props.searchQuery&&""!==e.searchQuery&&(null===(t=this.editor)||void 0===t||t.setSelection(new w.Q6(0,0,0,0))),this.props.lineLength===e.lineLength&&this.props.isFocusMode===e.isFocusMode||setTimeout((()=>{this.editor&&this.editor.layout()}),400),this.editor&&"full"===this.state.editor&&e.searchQuery!==this.props.searchQuery&&(null===(o=this.editor)||void 0===o||o.layout(),this.setDecorators()),this.editor&&"full"===this.state.editor&&e.selectedSearchMatchIndex!==this.props.selectedSearchMatchIndex&&this.setSearchSelection(this.props.selectedSearchMatchIndex)}render(){var e,{lineLength:t,noteId:o,searchQuery:i,theme:s}=this.props,{content:r,editor:a,overTodo:l}=this.state,d=(i&&this.searchMatches(),((e,t)=>"full"===e||void 0===t?25:t<=1072?.1*t:(t-768)/2)(t,null===(e=this.contentDiv.current)||void 0===e?void 0:e.offsetWidth));return n.createElement("div",{ref:this.contentDiv,className:"note-content-editor-shell".concat(l?" cursor-pointer":""),onClick:this.focusEditor},n.createElement("div",{className:"note-content-plaintext".concat("fast"===a?" visible":"")},r),"fast"!==a&&n.createElement(T.Ay,{key:o,editorDidMount:this.editorReady,editorWillMount:this.editorInit,language:"plaintext",theme:"dark"===s?"simplenote-dark":"simplenote",onChange:this.updateNote,options:{autoClosingBrackets:"never",autoClosingQuotes:"never",autoIndent:"keep",autoSurround:"never",automaticLayout:!0,"bracketPairColorization.enabled":!1,codeLens:!1,folding:!1,fontFamily:'"Simplenote Tasks", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif',hideCursorInOverviewRuler:!0,fontSize:16,guides:{indentation:!1},lineDecorationsWidth:d,lineHeight:24,lineNumbers:"off",links:!0,matchBrackets:"never",minimap:{enabled:!1},multiCursorLimit:1,occurrencesHighlight:"off",overviewRulerBorder:!1,quickSuggestions:!1,renderLineHighlight:"none",scrollbar:{horizontal:"hidden",useShadows:!1,verticalScrollbarSize:d},scrollBeyondLastLine:!1,selectionHighlight:!1,suggestOnTriggerCharacters:!0,unusualLineTerminators:"auto",useShadowDOM:!1,wordWrap:"bounded",wordWrapColumn:400,wrappingStrategy:D.nr?"simple":"advanced"},value:r}))}}var H={clearSearch:()=>k.A.ui.search(""),editNote:k.A.data.editNote,insertTask:()=>({type:"INSERT_TASK"}),openNote:k.A.ui.selectNote,storeEditorSelection:(e,t,o,i)=>({type:"STORE_EDITOR_SELECTION",noteId:e,start:t,end:o,direction:i}),storeNumberOfMatchesInNote:e=>({type:"STORE_NUMBER_OF_MATCHES_IN_NOTE",matches:e}),storeSearchSelection:e=>({type:"STORE_SEARCH_SELECTION",index:e})},_=(0,s.Ng)((e=>{var t;return{editorSelection:null!==(t=e.ui.editorSelection.get(e.ui.openedNote))&&void 0!==t?t:[0,0,"LTR"],isFocusMode:e.settings.focusModeEnabled,keyboardShortcuts:e.settings.keyboardShortcuts,lineLength:e.settings.lineLength,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),notes:e.data.notes,searchQuery:e.ui.searchQuery,selectedSearchMatchIndex:e.ui.selectedSearchMatchIndex,spellCheckEnabled:e.settings.spellCheckEnabled,theme:E.O4(e)}}),H)(K),B=o(38711);class Q extends n.Component{constructor(){super(...arguments),(0,i.A)(this,"focusEditor",(()=>this.focusContentEditor&&this.focusContentEditor())),(0,i.A)(this,"hasFocus",(()=>{var e;return null===(e=this.editorHasFocus)||void 0===e?void 0:e.call(this)})),(0,i.A)(this,"storeEditorHasFocus",(e=>this.editorHasFocus=e)),(0,i.A)(this,"storeFocusContentEditor",(e=>this.focusContentEditor=e))}componentDidMount(){this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus)}render(){var{openedNote:e}=this.props;return n.createElement("div",{className:"note-detail-wrapper"},e?n.createElement(_,{key:e,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus}):n.createElement("div",{className:"note-detail-placeholder"},n.createElement(B.A,null)))}}(0,i.A)(Q,"displayName","NoteDetail");var W=(0,s.Ng)((e=>({isDialogOpen:e.ui.dialogs.length>0,keyboardShortcuts:e.settings.keyboardShortcuts,openedNote:e.ui.openedNote})))(Q),U=o(94541);class j extends n.Component{constructor(){super(...arguments),(0,i.A)(this,"markdownEnabled",(()=>{var e;return null===(e=this.props.note)||void 0===e?void 0:e.systemTags.includes("markdown")})),(0,i.A)(this,"handleShortcut",(e=>{if(this.props.keyboardShortcuts){var t,o,{ctrlKey:i,metaKey:n,shiftKey:s}=e,r=e.key.toLowerCase(),{note:a,noteId:l,toggleMarkdown:d}=this.props,c=i||n;return a&&c&&s&&"m"===r?(d(l,!this.markdownEnabled()),e.stopPropagation(),e.preventDefault(),!1):c&&s&&"p"===r&&this.markdownEnabled()?(this.props.toggleEditMode(),e.stopPropagation(),e.preventDefault(),!1):!(s&&c&&"y"===r&&this.props.isEditorActive&&(!this.editFieldHasFocus()||this.props.isSearchActive?(null===(t=this.focusNoteEditor)||void 0===t||t.call(this),e.stopPropagation(),e.preventDefault(),1):(null===(o=this.focusTagField)||void 0===o||o.call(this),e.stopPropagation(),e.preventDefault(),1)))}})),(0,i.A)(this,"editFieldHasFocus",(()=>this.editorHasFocus&&this.editorHasFocus())),(0,i.A)(this,"storeEditorHasFocus",(e=>this.editorHasFocus=e)),(0,i.A)(this,"storeFocusEditor",(e=>this.focusNoteEditor=e)),(0,i.A)(this,"storeFocusTagField",(e=>this.focusTagField=e)),(0,i.A)(this,"storeTagFieldHasFocus",(e=>this.tagFieldHasFocus=e)),(0,i.A)(this,"tagFieldHasFocus",(()=>this.tagFieldHasFocus&&this.tagFieldHasFocus())),(0,i.A)(this,"toggleShortcuts",(e=>{e?window.addEventListener("keydown",this.handleShortcut,!0):window.removeEventListener("keydown",this.handleShortcut,!0)}))}componentDidMount(){this.toggleShortcuts(!0)}componentWillUnmount(){this.toggleShortcuts(!1)}render(){var{editMode:e,hasSearchQuery:t,hasSearchMatchesInNote:o,note:i,noteId:s}=this.props;if(!i)return n.createElement("div",{className:"note-detail-placeholder"},n.createElement(B.A,null));var r=!!i.deleted;return n.createElement("div",{className:"note-editor"},e||!i.systemTags.includes("markdown")?n.createElement(W,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus}):n.createElement(U.default,{noteId:s}),i&&!r&&n.createElement(A,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus}),t&&o&&n.createElement(d,null))}}(0,i.A)(j,"displayName","NoteEditor");var z={toggleNoteList:k.A.ui.toggleNoteList,toggleMarkdown:k.A.data.markdownNote,toggleEditMode:k.A.ui.toggleEditMode},G=(0,s.Ng)((e=>({allTags:e.data.tags,editMode:e.ui.editMode,keyboardShortcuts:e.settings.keyboardShortcuts,isEditorActive:!e.ui.showNavigation,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),revision:e.ui.selectedRevision,hasSearchQuery:""!==e.ui.searchQuery,hasSearchMatchesInNote:!!e.ui.numberOfMatchesInNote&&e.ui.numberOfMatchesInNote>0,isSearchActive:!!e.ui.searchQuery.length,isSmallScreen:E.Qv(e)})),z)(j)}}]);