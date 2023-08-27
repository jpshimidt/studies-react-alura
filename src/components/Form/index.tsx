import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render(): React.ReactNode {
        return(
            <form>
                <div>
                    <label htmlFor="job">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="job"
                        id="job"
                        placeholder="O que você deseja estudar?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;