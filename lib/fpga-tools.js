'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {

    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'fpga-tools:instantiate': () => this.instantiate()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },



  instantiate() {
    // let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
    let selection = editor.getSelectedText()
    atom.clipboard.write(
      selection.replace(/.*ut *(wire |reg |logic |bit )(\s?\[.*]\s*)?(\w*)(,?)/g,
                        "  .$3 ($3)$4").replace(/module *(\w*)/,"$1 $1"))
}

  }

};
