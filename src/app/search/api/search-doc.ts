/*
 * Copyright 2018-present Sonatype, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Doc } from "./doc";

export class SearchDoc implements Doc {
  id: string;
  g: string;
  a: string;
  v: string;
  latestVersion: string;
  repositoryId: string;
  p: string;
  timestamp: any;
  versionCount: number;
  text: string[];
  ec: string[];
  downloadLinks: {name:string, link:string}[];
  gReplace(r: string, s: string): string {
    let regEx = new RegExp(r);
    return this.g.replace(regEx, s);
  }
}
