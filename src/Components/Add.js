import React, { useState } from "react";
import MyService from "../MyService";

const Add = () => {
    const initialTutorialState = {
        id: null,
        fio: "",
        phone: "",
        address: "",
        inn :""
    };
    const [user, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTutorial({ ...user, [name]: value });
    };

    const saveTutorial = () => {
        var data = {
            fio: user.fio,
            phone: user.phone,
            address:user.phone,
            inn:user.inn
        };

        MyService.create(data)
            .then(response => {
                setTutorial({
                    id: response.data.id,
                    fio: response.data.fio,
                    phone: response.data.phone,
                    address: response.data.address,
                    inn: response.data.inn
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newTutorial = () => {
        setTutorial(initialTutorialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="fio">fio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fio"
                            required
                            value={user.fio}
                            onChange={handleInputChange}
                            name="fio"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            required
                            value={user.phone}
                            onChange={handleInputChange}
                            name="phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            required
                            value={user.address}
                            onChange={handleInputChange}
                            name="address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inn">Inn</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inn"
                            required
                            value={user.inn}
                            onChange={handleInputChange}
                            name="inn"
                        />
                    </div>

                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default Add;
