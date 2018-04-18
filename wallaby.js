module.exports = () => {
    return {
        files: [
            {pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false, load: true},
            {pattern: 'node_modules/chai/chai.js', instrument: false, load: true},
            'src/material-table.js',
            'src/material-tabs.js',
            'src/material-dropdown.js',
            'src/material-checkbox.js',
            'src/material-radiobutton.js',
            'src/material-radiobutton-group.js',
            'src/material-dialog.js',
            'src/material-slider.js',
            'src/material-switch.js',
            'src/material-textfield.js',
            'src/material-toggle-button.js',
            'src/material-app-bar.js',
            'src/material-datepicker.js',
            'src/material-slidemenu.js',
            'src/material-drawer.js',
            'src/material-progress.js',
            'src/material-button.js'
        ],
        tests: ['test/*.test.js'],

        env: {
            kind: 'chrome'
        },

        testFramework: 'mocha',

        debug: true,

        setup() {
            window.expect = chai.expect;
        }
    };
};