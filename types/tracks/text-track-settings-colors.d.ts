export default TextTrackSettingsColors;
/**
 * The component 'TextTrackSettingsColors' displays a set of 'fieldsets'
 * using the component 'TextTrackFieldset'.
 *
 * @extends Component
 */
declare class TextTrackSettingsColors extends Component {
    /**
     * Creates an instance of this class.
     *
     * @param { import('./player').default } player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        The key/value store of player options.
     *
     * @param { import('../utils/dom').ContentDescriptor} [options.content=undefined]
     *        Provide customized content for this modal.
     *
     * @param {Array} [options.fieldSets]
     *        Array that contains the configurations for the selects.
     *
     * @param {Object} [options.selectConfigs]
     *        Object with the following properties that are the select confugations:
     *        backgroundColor, backgroundOpacity, color, edgeStyle, fontFamily,
     *        fontPercent, textOpacity, windowColor, windowOpacity.
     *        it passes to 'TextTrackFieldset'.
     */
    constructor(player: any, options?: {
        content?: import('../utils/dom').ContentDescriptor;
        fieldSets?: any[];
        selectConfigs?: any;
    });
    /**
     * Create the `TextTrackSettingsColors`'s DOM element
     *
     * @return {Element}
     *         The DOM element that gets created.
     */
    createEl(): Element;
}
import Component from "../component";
//# sourceMappingURL=text-track-settings-colors.d.ts.map