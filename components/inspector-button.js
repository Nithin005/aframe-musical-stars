AFRAME.registerComponent('inspector-button',{
    init: function() {
        let btn = document.createElement('button');
        btn.id = 'openInspector'
        btn.innerText = 'Inspector';
        btn.onclick = () => {
            this.el.components.inspector.openInspector();
        }
        document.body.appendChild(btn);
    }
})