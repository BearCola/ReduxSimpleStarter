import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {

    const errors = {};

    if (values.title.length < 3) {
        errors.title = "Title must be at least 3 characters!";
    }

    if (!values.title ) {
        errors.title = "Enter a title ";
    }

    if (!values.categories) {
        errors.categories = "Enter a categories!";
    }

    if (!values.content) {
        errors.content = "Enter some content please";
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);