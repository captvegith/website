    // référencement du formulaire dans notre code Js 
    var theForm = document.forms["pricingPlantes"]; 

    // Variables prix plantesU
    var babyPlantePriceU = new Array();
        babyPlantePriceU["Achat"]=8;
        babyPlantePriceU["AchatEtEntretien"]=8;
        babyPlantePriceU["Location"]=1;

    var teenagePlantePriceU = new Array();
        teenagePlantePriceU["Achat"]=30;
        teenagePlantePriceU["AchatEtEntretien"]=30;
        teenagePlantePriceU["Location"]=3;

    var tombantePlantePriceU = new Array();
        tombantePlantePriceU["Achat"]=35;
        tombantePlantePriceU["AchatEtEntretien"]=35;
        tombantePlantePriceU["Location"]=4;   
    
    var daddyPlantePriceU = new Array();
        daddyPlantePriceU["Achat"]=50;
        daddyPlantePriceU["AchatEtEntretien"]=50;
        daddyPlantePriceU["Location"]=5;   

    var giantPlantePriceU = new Array();
        giantPlantePriceU["Achat"]=120;
        giantPlantePriceU["AchatEtEntretien"]=120;
        giantPlantePriceU["Location"]=12;   
    
// Choix Offres => prix plantesU
    $(document).ready(function() {
    $('input:radio[name=selectedOffer]').change(function() {


        if (this.value == 'Achat') {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Achat"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Achat"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Achat"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Achat"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Achat"]; 
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "none";
        }
        else if (this.value == 'AchatEtEntretien') {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["AchatEtEntretien"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["AchatEtEntretien"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["AchatEtEntretien"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["AchatEtEntretien"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["AchatEtEntretien"]; 
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "flex";
        }
        else {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Location"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Location"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Location"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Location"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Location"];  
            document.getElementById('coutPlantes').style.display = "none"; 
            document.getElementById('coutLoc').style.display = "flex";
            document.getElementById('coutEnt').style.display = "flex";  
            }
        });
});

    // Choix Pots => prix plantesU
    $(document).ready(function() {
    $('input:radio[name=selectedPots]').change(function() {

        if (this.value == 'TerreCuite') {
            if (document.getElementById('offerLocation').checked) {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 1;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 2;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 2; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 4; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 7;
            }
            else {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 5;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 16;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 16;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 31;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 69; 
            }
        }
        else if (this.value == 'Reservoirdeau') {

            if (document.getElementById('offerLocation').checked)  {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 3;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 3;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 3; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 4; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 9;
            }

            else {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 25; 
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 25;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 25;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 39;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 83; 
            }
        }    
    });
});

// fonction calcul de la quantité totale de plantes 
    // function numberOfPlantes(){
    //          var qtyOfPlantes = 0; 

    //     // calcul quantité total plantes
    //     var totalPlanteQ = document.getElementById('totalPlanteQty'); 
    //     var totalPlanteQuantity = parseInt(babyPlanteQty) + parseInt(teenagePlanteQty) + parseInt(tombantePlanteQty) + parseInt(daddyPlanteQty) + parseInt(giantPlanteQty); 
    //     totalPlanteQ.value = totalPlanteQuantity;
             
    //          return qtyOfPlantes; 
    //     }; 


   // fonction calcul du cout de l'entretien 
//    function coutEntretien() {
//     var coutEntretienT = document.getElementById('coutEntretienT'); 
//     if (document.getElementById('offerAchatEntretien').checked || document.getElementById('offerLocation').checked){
//         var coutEntretienTotal =  parseInt(totalPlanteQuantity) + 60; 
//         coutEntretienT.value = coutEntretienTotal;
//     }
//    }

    // Calcul CoutTotal
    function plantesPriceT() {
       

        // babyPlante
        babyPlantePots = document.getElementById('babyPlantePots').value; 
        babyPlanteQty = document.getElementById('babyPlanteQty').value; 
        // babyPlanteT = parseInt(babyPlantePots) * parseInt(babyPlanteQty);
        babyPlanteT = parseInt(babyPlantePots) * parseInt(babyPlanteQty);

        if(isNaN(babyPlantePots) == true) {
            document.getElementById('babyPlantePots').style.display = "none";
        } 
        else {
            document.getElementById('babyPlantePots').style.display = "block";
        }


        // teenagePlante
        teenagePlantePots = document.getElementById('teenagePlantePots').value; 
        teenagePlanteQty = document.getElementById('teenagePlanteQty').value; 
        // teenagePlanteT = document.getElementById("teenagePlanteT").value = teenagePlanteU * teenagePlanteQty;
        teenagePlanteT = parseInt(teenagePlantePots) * parseInt(teenagePlanteQty);

        // tombantePlante
        tombantePlantePots = document.getElementById('tombantePlantePots').value; 
        tombantePlanteQty = document.getElementById('tombantePlanteQty').value; 
        // tombantePlanteT = document.getElementById("tombantePlanteT").value = tombantePlanteU * tombantePlanteQty;
        tombantePlanteT = parseInt(tombantePlantePots) * parseInt(tombantePlanteQty);
        // daddyPlante
        daddyPlantePots = document.getElementById('daddyPlantePots').value; 
        daddyPlanteQty = document.getElementById('daddyPlanteQty').value; 
        // daddyPlanteT = document.getElementById("daddyPlanteT").value = daddyPlanteU * daddyPlanteQty;
        daddyPlanteT = parseInt(daddyPlantePots) * parseInt(daddyPlanteQty); 

        //giantPlante
        giantPlantePots = document.getElementById('giantPlantePots').value; 
        giantPlanteQty = document.getElementById('giantPlanteQty').value; 
        // giantPlanteT = document.getElementById("giantPlanteT").value = giantPlanteU * giantPlanteQty;
        giantPlanteT = parseInt(giantPlantePots) * parseInt(giantPlanteQty); 


    

        // Calcul Cout Entretien 
    

        // calcul pots 
        var prixPlantesPots = document.getElementById('prixPlantesPots');
        var prixPlantesPotsT = parseInt(babyPlanteT) + parseInt(teenagePlanteT) + parseInt(tombantePlanteT) + parseInt(daddyPlanteT) + parseInt(giantPlanteT); 
        prixPlantesPots.value = prixPlantesPotsT; 

        // calcul Cout Location 
        var coutLocationT = document.getElementById('coutLocationT'); 
        if (document.getElementById('offerLocation').checked) {
            var coutLocation = prixPlantesPotsT;
            coutLocationT.value = coutLocation; 
        }

       


        // Calcul cout total TOTAL 
        var livraisonInstallation = 89; 
        if (document.getElementById('offerLocation').checked) {
            var coutTotal = parseInt(coutEntretienTotal) + parseInt(livraisonInstallation) + parseInt(coutLocation);
        }
        else if (document.getElementById('offerAchatEntretien').checked) {
            var coutTotal = parseInt(coutEntretienTotal) + parseInt(livraisonInstallation) + parseInt(prixPlantesPotsT);
        }
        else {
            var coutTotal = parseInt(livraisonInstallation) + parseInt(prixPlantesPotsT);
        };


        document.getElementById('totalPrice').innerHTML = "Prix total de "+coutTotal+" euros.";

        if(isNaN(coutTotal) == true) {
            document.getElementById('totalPrice').style.display = "none";
        } 
        else {
            document.getElementById('totalPrice').style.display = "block";
        }
    

        // calcul prix total HT 
        // var pricePlanteT = document.getElementById('pricePlanteT'); 
        // var pricePlanteTotal = parseInt(babyPlanteT) + parseInt(teenagePlanteT) + parseInt(tombantePlanteT) + parseInt(daddyPlanteT) + parseInt(giantPlanteT);
        // pricePlanteT.value = pricePlanteTotal;
    };

    function wcqib_refresh_quantity_increments() {
        jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
            var c = jQuery(b);
            c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
        })
    }
    String.prototype.getDecimals || (String.prototype.getDecimals = function() {
        var a = this,
            b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
    }), jQuery(document).ready(function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("updated_wc_div", function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("click", ".plus, .minus", function() {
        var a = jQuery(this).closest(".quantity").find(".qty"),
            b = parseFloat(a.val()),
            c = parseFloat(a.attr("max")),
            d = parseFloat(a.attr("min")),
            e = a.attr("step");
        b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
    });

    // Calcul Plantes Pots HT  function getPlantesPrice () ? 


    // Calcul Cout Entretien? function getEntretienPrice() ? 

    // Calcul cout Location function getLocationPrice () ? 

    // Calcul du total function getTotal()? 

// // Calcul CoutTotal
// function plantesPriceT() {

//     var prixPlantesPots = document.getElementById('prixPlantesPots');

//     // babyPlante
//     babyPlantePots = document.getElementById('babyPlantePots').value; 
//     babyPlanteQty = document.getElementById('babyPlanteQty').value; 
//     // babyPlanteT = parseInt(babyPlantePots) * parseInt(babyPlanteQty);
//     babyPlanteT = parseInt(babyPlantePots) * parseInt(babyPlanteQty);

//     // teenagePlante
//     teenagePlantePots = document.getElementById('teenagePlantePots').value; 
//     teenagePlanteQty = document.getElementById('teenagePlanteQty').value; 
//     // teenagePlanteT = document.getElementById("teenagePlanteT").value = teenagePlanteU * teenagePlanteQty;
//     teenagePlanteT = parseInt(teenagePlantePots) * parseInt(teenagePlanteQty);

//     // tombantePlante


// function coutPlantesPot(){} => 
// function coutRempotage(){
    // var coutRempotage = 0; 
    // récupération du nombre de plantes comme le cout d'entretien 
 //}
 
// function prixTotal = 
