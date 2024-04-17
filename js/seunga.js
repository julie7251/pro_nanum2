// 승아
(function ($) {
    // 햄버거 작동
    window.onload = function () {
        //상단 스크롤 기능
        const header = document.querySelector(".header");
        const mbt = document.querySelector(".m-bt");
        let scy = 0;
        // 반응형 (1024px) 햄버거바가 생겼을때
        // 햄버거버튼을 클릭했을때
        const navMb = document.querySelector(".nav-mb");
        const htmlRoot = document.querySelector("html");
        mbt.addEventListener("click", function () {
            const state = this.classList.contains("ani");
            if (state) {
                // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
                this.classList.remove("ani");
                // 모바일에 메뉴가 나타나는 코드
                navMb.classList.remove("active");
                // 스크롤이 안생기게 하는 코드
                htmlRoot.classList.remove("active");
            } else {
                // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
                this.classList.add("ani");
                // 모바일에 메뉴가 나타나는 코드
                navMb.classList.add("active");
                // 스크롤이 안생기게 하는 코드
                htmlRoot.classList.add("active");
            }
        });
    };

    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend(
                {},
                $.fn.countTo.defaults,
                {
                    from: $(this).data("from"),
                    to: $(this).data("to"),
                    speed: $(this).data("speed"),
                    refreshInterval: $(this).data("refresh-interval"),
                    decimals: $(this).data("decimals"),
                },
                options
            );

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data("countTo") || {};

            $self.data("countTo", data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof settings.onUpdate == "function") {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData("countTo");
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof settings.onComplete == "function") {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null, // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
})(jQuery);

jQuery(function ($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        },
    });

    // start all the timers
    $(".timer").each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data("countToOptions") || {});
        $this.countTo(options);
    }
});
