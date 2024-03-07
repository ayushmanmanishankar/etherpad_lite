const logHello = function () {
    console.l("Hello!");
};

exports.postAceInit = function (hook, context) {
    const editorContainer = context.editorInfo.editor.container;
    editorContainer.addEventListener("click", logHello);
};