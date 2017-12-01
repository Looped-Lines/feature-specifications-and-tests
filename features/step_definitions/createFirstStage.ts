import { protractor } from 'protractor';
import { serenity } from 'serenity-js';
import { Actor, BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
import { CreatePipelineStage, Start} from '../../spec/screenplay/tasks';

export = function createFirstStage(){
    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser))
    });

    this.Given(`that $name has not added any stages to his pipeline`, function(name: string) {
        return stage.theActorCalled(name).attemptsTo(
            Start.withEmptyPipeline()
        );
    });

    this.When(`he creates a stage`, function() {
        return stage.theActorInTheSpotlight().attemptsTo(
            CreatePipelineStage.withNoName()
        );
    });
};
