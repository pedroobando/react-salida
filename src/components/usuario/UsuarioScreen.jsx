import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddNewItem } from '../ui/AddNewItem';
import {
  usuarioSetActive,
  usuarioStartLoading,
  usuarioClearActive,
} from '../../redux/actions/usuarios';
import { UsuarioItem } from './UsuarioItem';
// import { UsuarioModal } from './UsuarioModal';
// import { uiOpenModal } from '../../redux/actions/ui';

import { Paginate } from '../ui/Paginate';

const initialState = { page: 1, limit: 10 };

export const UsuarioScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [stPage, setStPage] = useState(initialState);
  // const [stDepartamento, setStDepartamento] = useState([]);
  const { collections: lstusuarios, totalPages } = useSelector(
    (state) => state.collection
  );

  useEffect(() => {
    dispatch(usuarioStartLoading(stPage.page, stPage.limit));
  }, [dispatch, stPage]);

  // useEffect(() => {
  //   dispatch(departamentoStartLoading(1, 100)).then((result) => {
  //     if (result) setStDepartamento([...result]);
  //   });
  //   return () => {
  //     setStDepartamento([]);
  //   };
  // }, [dispatch, setStDepartamento]);

  const handleOpenModal = () => {
    // dispatch(uiOpenModal());
    dispatch(usuarioClearActive());
    history.push('/datos/usuario/edit');
  };

  const handleClickEvent = (event) => {
    dispatch(usuarioSetActive(event.currentTarget.id));
    history.push('/datos/usuario/edit');
  };

  const handlePageClick = (event) => {
    setStPage({ ...stPage, page: event.selected + 1 });
  };

  return (
    <React.Fragment>
      <div className="row mt-1">
        {lstusuarios.map((item) => (
          <UsuarioItem key={item.id} usuario={item} onClickEvent={handleClickEvent} />
        ))}
        {totalPages >= 2 && (
          <Paginate pageCount={totalPages} handlePageClick={handlePageClick} />
        )}
      </div>

      <AddNewItem handleOpenModal={handleOpenModal} />
      {/* <UsuarioModal
        listIndex={{
          page: stPage.page,
          limit: stPage.limit,
          inlist: lstusuarios.length,
          totalPages,
        }}
        lstDepartamentos={stDepartamento}
      /> */}
    </React.Fragment>
  );
};
