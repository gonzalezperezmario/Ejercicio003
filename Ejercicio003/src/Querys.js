/*
Insertamos una serie de valores concretados en el documento de "Query Documents".
Dichos datos los introduciremos en una nueva coleción llamada "inventory"
Los insertaremos mediante la función "insertMany".
    Estructura: {
        item: string
        qty: int
        size: object
            h: int
            w: int
            uom: string
        status: string
    }
*/

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

 /* Además de los datos anteriores provenientes de la página web de mongo, introducimos más datos con la misma estructura*/

 db.inventory.insertMany([
    { item: "pen", qty: 30, size: { h: 30, w: 15, uom: "cm" }, status: "B" },
    { item: "bag", qty: 21, size: { h: 60, w: 34, uom: "in" }, status: "B" },
    { item: "pencil_case", qty: 32, size: { h: 18.5, w: 11, uom: "in" }, status: "D" },
    { item: "rubber", qty: 85, size: { h: 42, w: 20, uom: "cm" }, status: "C" },
    { item: "sharpener", qty: 90, size: { h: 49.6, w: 34, uom: "in" }, status: "A" }
 ]);

 /*Después de insertar los documentos en la colección realizamos una serie de consultas:*/


 /* Filtra por los objetos que no cumplan una de las dos condiciones*/
    db.inventory.find({$nor:[{'size.w':{$gte:25}},{status:"D"}]})
 
 /* Filtra por los objetos que cumplan ambas condiciones*/
    db.inventory.find({$and:[{qty:{$gt:40}},{status:{$in:["A","C"]}}]})

/* Filtra por los objetos que cumplan al menos una de la condiciones*/
    db.inventory.find({$or: [{qty:{$lt:65}},{'size.h':{$gt:34}}]})

 /* Filtra por los objetos que cumplan ambas condiciones*/
    db.inventory.find({$and:[{'size.uom':{$eq:"cm"}},{status:{$in:["B","D"]}}]})
    
 /* Filtra por los objetos que cumplan ambas condiciones*/
    db.inventory.find({$and:[{qty:{ $nin:[120,40]}},{'size.h':{$gt:6}},{status:"A"}]})

/* Adjunto pdf con imágenes del resultado de las consultas*/
    