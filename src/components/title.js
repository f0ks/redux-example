import React from 'react'
import {connect} from 'react-redux'
import {actions} from "../store/actions";

const mapStateToProps = (state) => ({
    title: state.settings.title
});

const Title = ({title, dispatch}) => (
    <div>
        <p>
            Title is {title}
        </p>

        <input
            type='text'
            onChange={(event) => {
                dispatch(actions.setTitle(event.target.value))
            }}
        />
    </div>
);

export default connect(mapStateToProps)(Title)