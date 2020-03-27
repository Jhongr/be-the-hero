/**
 * Metodos Permitidos
 * 
 * GET: Buscar Uma infromação no back-end
 * POST: Criar uma infromação no back-end
 * PUT: Alterar um infromação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados em rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpo de requuisição, ultilizado para criar ou alterar recursos
 */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;