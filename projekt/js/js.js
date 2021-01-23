//nawigacja
function myHamburger() {
    var x = document.getElementsByTagName("NAV")[0];
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//akordeon w nawigacji
$(function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            for (let j of acc) {
                j.classList.remove("active");
                j.nextElementSibling.style.maxHeight = null;
            };
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
})


//MECHANIKA
class Plant {
    constructor(name, timeOfGrowth = 1, irrigation = 1) {
        this.name = name;
        this.timeOfGrowth = timeOfGrowth;
        this.irrigation = irrigation;
        this.value = 1;
        this.isPlanted = false;
        this.isRipe = false;
    }


}

class Resources {
    constructor(coin = 100, flower = 1, plant = 1, tree = 1) {
        this.coin = coin;
        this.flower = flower;
        this.plant = plant;
        this.tree = tree;
    }

    getCoin() { return this.coin; }

    addCoin(c) { this.coin = this.coin + c; }
}

$(document).ready(function () {
    resources = new Resources()
    isSelected();
});

$(function () {
    //$(document).click(function () { $(".wallet").text(resources.getCoin()) })
    setInterval(function () { $(".wallet").text(resources.getCoin() + ' coins') }, 100);
});

var selected = null;

$(function () {
    $("#buyFlowerpot").click(function () {
        $("flowerpots").append('<div class=flowerpot>');
        $("flowerpots div").last().append('<p>');
        $("flowerpots div").last().on("click", isSelected);
        $("flowerpots div p").last().text("pusta donica");
        resources.addCoin(-10);
    });

    $("#sellFlowerpot").click(function () {
        if (selected != undefined) {
            selected.remove();
            resources.addCoin(5);
        }
    })

    $("#planting").click(function () {
        if (selected != undefined) {
            var donica = selected;
            $(function () {
                resources.addCoin(-1);
                var i = 5;
                $(donica).find("p").text('roślinka (' + i + ')');
                i--;
                var clock = setInterval(function () {
                    $(donica).find("p").text('roślinka (' + i + ')');
                    i--;
                    if (i == 0) {
                        clearInterval(clock);
                        $(donica).find("p").text("pusta donica");
                        resources.addCoin(5);
                    }
                }, 1000);
            })
        }
    })

    $("#raking").click(function () {
        $(selected).css("background", "brown");
    })

    $("#watering").click(function () {
        $(selected).css("background", "blue");
    })
});


function isSelected() {
    $(".flowerpot").on("click", function () {
        if (selected == this) {
            $(selected).removeClass("selected");
            selected = null;
        }
        else {
            if (selected != null) {
                $(selected).removeClass("selected");
                selected = null;
            };
            selected = this;
            $(selected).addClass("selected");
        }
    })
};