import React from 'react';
import { NavbarTop } from '../components/ui/NavbarTop';
import { Switch, Redirect, Route } from 'react-router-dom';

import { SalidaScreen } from '../components/salida/SalidaScreen';
import { SalidaEdit } from '../components/salida/SalidaEdit';

import { PersonaScreen } from '../components/persona/PersonaScreen';
import { VehiculoScreen } from '../components/vehiculo/VehiculoScreen';
import { UsuarioScreen } from '../components/usuario/UsuarioScreen';

export const MainRouter = () => {
  return (
    <>
      <NavbarTop />
      <div className="container-xl">
        <Switch>
          <Route exact path="/salida" component={SalidaScreen} />
          <Route exact path="/salida/nuevo" component={SalidaEdit} />
          <Route exact path="/datos/persona" component={PersonaScreen} />
          <Route exact path="/datos/vehiculo" component={VehiculoScreen} />
          <Route exact path="/datos/usuario" component={UsuarioScreen} />
          <Redirect to="/salida" />
        </Switch>
      </div>
    </>
  );
};
