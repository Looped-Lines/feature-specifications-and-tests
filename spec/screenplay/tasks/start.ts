import { Open, PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';

export class Start implements Task {

    static withEmptyPipeline() {
        return new Start();
    }

    @step('{0} starts with an empty pipeline')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/'),
        );
    }
}
