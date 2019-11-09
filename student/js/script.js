$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
    });

    $("#content").load("home.html");

    $("a.menuButton").click(function (e) {
        e.preventDefault();
        let button = $(this);

        let link = button.attr("href");
        $("#content").load(link);
        $("a.active").toggleClass("active");
        button.toggleClass("active");
        $('nav').toggleClass('active');
    });
});

function addManufacFv() {
    let form = $("#addManufacturersForm");
    form.submit(function func(event) {
        event.preventDefault();

        let name = form.find("input[name='name']").val(),
            country = form.find("input[name='country']").val(),
            founded = form.find("input[name='founded']").val(),
            url = form.attr("action");

        $.post(url, {
           name: name,
           country: country,
           founded: founded
        });
    });
}

function addCarFv() {
    let form = $("#addCarsForm");
    form.submit(function func(event) {
        event.preventDefault();

        let name = form.find("input[name='name']").val(),
            manufacturer = form.find("input[name='manufacturer']").val(),
            consumption = form.find("input[name='consumption']").val(),
            color = form.find("input[name='color']").val(),
            year = form.find("input[name='year']").val(),
            available = form.find("input[name='available']").val(),
            horsepower = form.find("input[name='horsepower']").val(),
            url = form.attr("action");

        $.post(url, {
            name: name,
            manufacturer: manufacturer,
            consumption: consumption,
            color: color,
            year: year,
            available: available,
            horsepower: horsepower
        });
    });
}