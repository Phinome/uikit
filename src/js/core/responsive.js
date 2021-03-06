import { Dimensions } from '../util/index';

export default function (UIkit) {

    UIkit.component('responsive', {

        props: ['width', 'height'],

        init() {
            this.$addClass('uk-responsive-width');
        },

        update: {

            write() {
                if (this.$el.is(':visible') && this.width && this.height) {
                    this.$el.height(Dimensions.contain(
                        {height: this.height, width: this.width},
                        {width: this.$el.parent().width(), height: this.height || this.$el.height()}
                    )['height']);
                }
            },

            events: ['load', 'resize']

        }

    });

}
