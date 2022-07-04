var select = {
    Coffee: { Flavor: ["Espresso - الاسبريسو", "Filter - المقطرة"], MonthlyConsumption: ["20 - 50 Kg", "50 – 100 Kg", "100 - 200 Kg", "200 – 500 Kg", "500 – 1000 Kg", "&gt; 1000Kg"] },
    Syrups: { Flavor: ["Vanilla - الفانيلا", "Caramel - الكراميل", "Hazelnut - البندق"], MonthlyConsumption: ["6 - 24 Bottle", "24 - 72 Bottle", "72 – 124 Bottle", "124 – 272 Bottle", "&gt; 272 Bottle"] },
    Sauces: { Flavor: ["White Chocolate - الشوكلاته البيضاء", "Caramel - الكراميل", "Dark Chocolate - الشوكلاته الداكنه"], MonthlyConsumption: ["6 - 24 Bottle", "24 - 72 Bottle", "72 – 124 Bottle", "124 – 272 Bottle", "&gt; 272 Bottle"] },
    Powders: { Flavor: ["Mocha - الموكا", "Carmel Latte - كراميل لاتيه", "Café latte - كافي لاتيه", "Arabian latte - الاتيه العربي", "Vanilla - الفانيلا"], MonthlyConsumption: ["15 - 75 Kg", "75 – 150 Kg", "180 - 210 Kg", "210 – 310 Kg", "&gt; 310 Kg"] }
};

function myselect() {
    var flavor = document.getElementById("00N8d00000CwEbm");
    var mc = document.getElementById("00N8d00000CwEoo");
    var selection = document.getElementById("00N8d00000CwEbS").value;

    flavor.innerHTML = " ";
    mc.innerHTML = " ";
    var fop, mcop;
    fop = mcop = "<option value>--None--</option>";
    for (key in select) {
        if (key == selection) {

            for (i in select[key]) {
                for (j in select[key][i]) {
                    console.log(select[key][i][j]);

                    if (i == "Flavor") {
                        fop += '<option value=' + select[key][i][j].replace(/ /g, "") + '>' + select[key][i][j] + '</option>'

                    } else {
                        mcop += '<option value=' + select[key][i][j].replace(/ /g, "") + '>' + select[key][i][j] + '</option>'

                    }
                }
            }
            mc.innerHTML = mcop;
            flavor.innerHTML = fop;
        }
    }
}