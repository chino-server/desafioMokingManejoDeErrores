const errorDictionary = {
    'PRODUCT_NOT_FOUND':{
        httpStatus:404,
        message: 'Producto no encontrado'
    },
    'CARD_ADD_ERROR':{
        httpStatus:500,
        message:'No se puede agregar al carrito'
    },
    "PRODUCT_ALREADY_EXISTS": {
        httpStatus: 400,
        message: 'El producto ya existe'
    },
    "NOT_PRODUCT":{
        httpStatus:401,
        message:'No hay ningun producto'
    }
}
    

export default errorDictionary