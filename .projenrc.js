const { NpmAccess } = require('projen');
const { ProjectType } = require('projen');
const { AwsCdkConstructLibrary } = require('projen');
const { DependabotScheduleInterval } = require('projen/lib/github');

const project = new AwsCdkConstructLibrary({
  author: 'jakeitegsy',
  authorAddress: 'jakeitegsy@yahoo.com',
  cdkVersion: '1.73.0',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'ProjectName',
  repositoryUrl: 'https://github.com/jakeitegsy/ProjectName.git',
  defaultReleaseBranch: 'main',

  /* AwsCdkConstructLibraryOptions */
  cdkAssert: true,
  cdkDependencies: ['@aws-cdk/core', '@aws-cdk/aws-lambda'],
  docgen: true,
  eslint: true,
  publishToNuget: {
    dotNetNamespace: 'jakeitegsy.examples',
    packageId: 'ProjectName.Test'
  },
  publishToPyPi: {
    distName: 'ProjectName',
    module: 'ProjectName'
  },

  /* NodePackageOptions */
  npmAccess: NpmAccess.PUBLIC,

  /* NodeProjectOptions */
  dependabot: true,
  dependabotOptions: {
    automerge: false,
    ignoreProjen: false,
    scheduleInterval: DependabotScheduleInterval.WEEKLY,
  },
  gitignore: ['.idea'],
  releaseBranches: ['main'],
  releaseToNpm: true,
  releaseWorkflow: true,

  /* ProjectOptions */
  projectType: ProjectType.LIB,
});

project.synth()
