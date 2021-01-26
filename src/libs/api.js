/**
 * @module api
 */
import express from 'express'
const app = express()

/**
 * Ruta Inicial
 * @name RutaInicial
 * @path {GET} /
 */
app.get('/', (req,res) => res.send('bienvenido'))

/**
 *  Ruta Usuario
 * @name RutaUsuario
 * @path {POST} /users
 */
app.post('/users', (req,res) => res.send('bienvenido'))

/**
 *  Ruta products
 * @name RutaProductos
 * @path {DELETE} /users
 */
app.delete('/products', (req,res) => res.send('bienvenido'))

/**
 *  Ruta singin
 * @name RutaSingin
 * @path {POST} /users
 */
app.post('/singin', (req,res) => res.send('bienvenido'))