import { typeListas } from '../types/types';
import { fetchConToken } from '../../helpers/fetch';

export const listaDptoStartLoading = (page = 1, limit = 100) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(
        `departamento?page=${page}&limit=${limit}&sort=nombre&activo=true`
      );
      const body = await resp.json();
      // console.log(body);
      if (body.ok && body.data.length >= 1) {
        // return body.data.map((item) => ({ id: item.id, nombre: item.nombre }));
        dispatch(eventLoadedDpto(body));
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const listaDptoClear = () => {
  return async (dispatch) => {
    try {
      dispatch(eventClearDpto());
    } catch (error) {
      console.log(error);
    }
  };
};

export const listaPersonaStartLoading = (page = 1, limit = 100) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(
        `persona?page=${page}&limit=${limit}&sort=nombre&activo=true`
      );
      const body = await resp.json();
      if (body.ok && body.data.length >= 1) {
        dispatch(eventLoadedPersona(body));
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const listaPersonaClear = () => {
  return async (dispatch) => {
    try {
      dispatch(eventClearPersona());
    } catch (error) {
      console.log(error);
    }
  };
};

export const listaVehiculoStartLoading = (page = 1, limit = 100) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(
        `vehiculo?page=${page}&limit=${limit}&sort=nombre&activo=true`
      );
      const body = await resp.json();
      if (body.ok && body.data.length >= 1) {
        dispatch(eventLoadedVehiculo(body));
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const listaVehiculoClear = () => {
  return async (dispatch) => {
    try {
      dispatch(eventClearVehiculo());
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoadedDpto = (entities) => ({
  type: typeListas.dptLoaded,
  payload: {
    lst: entities.data.map((item) => ({
      id: item.id,
      name: item.nombre,
    })),
    slc: entities.data.map((item) => ({
      value: item.id,
      label: item.nombre,
    })),
  },
});

const eventClearDpto = () => ({
  type: typeListas.dptClear,
});

const eventLoadedPersona = (entities) => ({
  type: typeListas.perLoaded,
  payload: {
    lst: entities.data.map((item) => ({
      id: item.id,
      name: item.nombre,
    })),
    slc: entities.data.map((item) => ({
      value: item.id,
      label: item.nombre,
    })),
  },
});

const eventClearPersona = () => ({
  type: typeListas.perClear,
});

const eventLoadedVehiculo = (entities) => ({
  type: typeListas.vehLoaded,
  payload: {
    lst: entities.data.map((item) => ({
      id: item.id,
      name: item.nombre,
    })),
    slc: entities.data.map((item) => ({
      value: item.id,
      label: item.nombre,
    })),
  },
});

const eventClearVehiculo = () => ({
  type: typeListas.vehClear,
});