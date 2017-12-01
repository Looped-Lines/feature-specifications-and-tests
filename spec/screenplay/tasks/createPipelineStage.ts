import { Click, PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';
import CreateStageButton = require('../components/createStageButton');

export class CreatePipelineStage implements Task {

    static withNoName() {
        return new CreatePipelineStage();
    }

    @step('{0} starts with an empty pipeline')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Click.on(CreateStageButton)
        );
    }
}
