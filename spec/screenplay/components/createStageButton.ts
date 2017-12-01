import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

const CreateStageButton = Target.the('"Create Stage" button').located(by.id('createStageButton'));

export = CreateStageButton;
